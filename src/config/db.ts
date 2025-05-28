/**
 * db.js
 * @description :: exports database connection using mongoose
 */

import mongoose from "mongoose";
import { config } from "./env";


const uri: any = process.env.NODE_ENV === 'test' ? config.DB_TEST_URL  : config.DB_URL;


mongoose.connect(uri);

let db = mongoose.connection;

// connecting mongo db
db.once('open', () => {
  console.log('Connected to mongodb');
});


//handling mongodb error
db.on('error', () => {
  console.log('Error in mongodb connection');
  process.exit(0)
});

export default mongoose;