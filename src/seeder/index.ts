import mongoose from "mongoose"
import 'dotenv/config'
import '../config/db'
import categoryModel from "../models/category.model"
import { createCategories } from "./category"
import { createRunningShoeListings, createTelevisionListings } from "./listing"
import businessModel from "../models/business.model"


const clearDatabase = async () => {
    await categoryModel.deleteMany({});
    await businessModel.deleteMany({});
    console.log('Cleared existing data');
};

const main = async () => {
    await clearDatabase();
    const categories = await createCategories();

    const runningShoesCategory: any = categories.find(c => c.slug === 'running-shoes');
    const televisionsCategory: any = categories.find(c => c.slug === 'televisions');

    await createRunningShoeListings(runningShoesCategory._id);
    await createTelevisionListings(televisionsCategory._id);

    console.log('Database seeded successfully!');

    await mongoose.connection.close()
    console.log('db connection closed')
}
main()
