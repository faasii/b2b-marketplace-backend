

export const parseFilter = (filtersParam: string) => {
    try {
        return JSON.parse(decodeURIComponent(filtersParam as string));
    } catch (error) {
        throw Error("Invalid filter params")
    }
}


export const matchStage = (category: any, filters: any) => {
    return {
        categoryId: category._id,
        ...(Object.keys(filters).length > 0 && {
            $and: Object.entries(filters).map(([key, value]) => ({
                [`attributes.${key}`]: value
            }))
        })
    };
}


export const sortStage = (q?: string) => {
    const data = q ? {
        $sort: { score: { $meta: "textScore" } }
    } : {
        $sort: { createdAt: -1 }
    };

    return data
}


export const textStageBuiler = (q?: string) => {
    const textSearchStage = q ? {
        $match: {
            $text: { $search: q }
        }
    } : null;
    return textSearchStage
}


export const faucetGenerator = (category: any) => {
    // Facet generation for each attribute in the category schema
    const facetStages = category.attributeSchema.map((attr: any) => ({
        $group: {
            _id: `$attributes.${attr.key}`,
            count: { $sum: 1 },
            // Include the attribute key in the result for reference
            attributeKey: { $first: attr.key },
            attributeName: { $first: attr.name }
        }
    }));

    return facetStages
}


export const pipelineGenerator = async ({ sortStage, matchStage, textSearchStage,category, q }: any) => {
    const pipeline = [
      ...(textSearchStage ? [textSearchStage] : []),
      { $match: matchStage },
      ...(sortStage ? [sortStage] : []),
      {
        $facet: {
          results: [
            { $limit: 20 },
            { $project: { 
              title: 1,
              description: 1,
              price: 1,
              location: 1,
              attributes: 1,
              ...(q ? { score: { $meta: "textScore" } } : {})
            }}
          ],
          ...category.attributeSchema.reduce((acc:any, attr:any) => {
            acc[attr.key] = [
              { $group: {
                _id: `$attributes.${attr.key}`,
                count: { $sum: 1 }
              }}
            ];
            return acc;
          }, {})
        }
      }
    ];
    return pipeline

}


export const formatResult = ({ aggregationResult, category }: { aggregationResult: any, category: any }) => {
    // Transform facets into a more usable format
    const facets:any = {};
    for (const attr of category.attributeSchema) {
      const facetData = aggregationResult[attr.key] || [];
      facets[attr.key] = {
        name: attr.name,
        type: attr.type,
        options: facetData
          .filter((item:any) => item._id !== null && item._id !== undefined)
          .map((item:any) => ({
            value: item._id,
            count: item.count
          }))
          .sort((a:any, b:any) => {
            // Special sorting for enum types
            if (attr.type === 'enum' && attr.options) {
              return attr.options.indexOf(a.value) - attr.options.indexOf(b.value);
            }
            // Default sort by count descending
            return b.count - a.count;
          })
      };
    }
    return facets
}