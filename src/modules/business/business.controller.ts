import { Request, Response } from "express";
import { faucetGenerator, formatResult, matchStage, parseFilter, pipelineGenerator, sortStage, textStageBuiler } from "./business.service";
import dbServices from "../../utils/dbServices";
import categoryModel from "../../models/category.model";
import businessModel from "../../models/business.model";

const search = async (req: Request, res: Response) => {
    try {
        const { category: categoryParmas, filters: filtersParam, q } = req.query

        if (!categoryParmas) return res.validationError({ message: "Category is required!" })

        let filters = {};

        if (filtersParam) filters = parseFilter(filtersParam as string);

        const category: any = await dbServices.findSingleDocument(categoryModel, { slug: categoryParmas })
        const allCategory:any = await dbServices.findAllDocuments(categoryModel,{},{select:"name slug"})
        if (!category?._id) return res.validationError({ message: "Catgory not found" })

        const matchStageData = matchStage(category, filters)
        const textSearchStage = textStageBuiler(q as any)
        const sortStageData = sortStage(q as any)
        const pipeline = await pipelineGenerator({ sortStage: sortStageData, matchStage: matchStageData, textSearchStage: textSearchStage, category, q })



        const [aggregationResult] = await businessModel.aggregate(pipeline as any);

        const facets = await formatResult({ aggregationResult, category })

        
        const responseData = {
            results: aggregationResult.results,
            facets,
            totalResults: aggregationResult.results.length,
            categorys:allCategory 
        }

        res.success({data:responseData})
    } catch (error) {
        // console.log(error)
        res.internalServerError()
    }
}


export const businessController = {
    search
}