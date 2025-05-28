import categoryModel from "../models/category.model";



// Create categories
export const createCategories = async () => {
  const categories = [
    {
      name: "Running Shoes",
      slug: "running-shoes",
      attributeSchema: [
        { name: "Size", key: "size", type: "enum", options: ["7", "8", "9", "10", "11"] },
        { name: "Color", key: "color", type: "enum", options: ["red", "blue", "black", "white", "green"] },
        { name: "Gender", key: "gender", type: "enum", options: ["men", "women", "unisex"] },
        { name: "Width", key: "width", type: "enum", options: ["narrow", "regular", "wide"] },
        { name: "Arch Support", key: "archSupport", type: "enum", options: ["low", "medium", "high"] }
      ]
    },
    {
      name: "Televisions",
      slug: "televisions",
      attributeSchema: [
        { name: "Screen Size", key: "screenSize", type: "enum", options: ["32\"", "40\"", "50\"", "55\"", "65\"", "75\""] },
        { name: "Resolution", key: "resolution", type: "enum", options: ["1080p", "4K", "8K"] },
        { name: "Smart TV", key: "smartTv", type: "boolean" },
        { name: "Brand", key: "brand", type: "enum", options: ["Samsung", "LG", "Sony", "TCL", "Hisense"] },
        { name: "Refresh Rate", key: "refreshRate", type: "enum", options: ["60Hz", "120Hz", "240Hz"] }
      ]
    }
  ];

  const createdCategories = await categoryModel.insertMany(categories);
  console.log(`Created ${createdCategories.length} categories`);
  return createdCategories;
};