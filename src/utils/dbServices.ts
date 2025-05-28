import { Model, QueryOptions, Condition } from "mongoose";



//find single data from collection
const findSingleDocument = <T>(model: Model<T>, filter = {}, options: QueryOptions = {}) => new Promise((resolve, reject) => {
    let query: any = model.findOne(filter);
    options.select ||= "-isDeleted -isActive -createdAt -updatedAt -isSuperAdmin -userType";
    if (options.select) {
        query = query.select(options.select);
    }
    if (options.populate) {
        query = query.populate(options.populate);
    }
    if (options.lean) {
        query = query.lean(true);
    }
    query.exec()
        .then((data: any) => resolve(data))
        .catch((err: any) => reject(err))
});


//create document
const createDocument = <T>(model: Model<T>, data: any) => new Promise((resolve, reject) => {
  model.create(data)
    .then(result => resolve(result))
    .catch(err => reject(err))
});


//update document
const updateOneDocument = <T>(model: Model<T>, filter: Condition<T>, data: any, options = { new: true }) => new Promise((resolve, reject) => {
  model.findOneAndUpdate(filter, data, options).then(result => resolve(result)).catch(err => reject(err))
});

//update many document
const updateManyDocuments = <T>(model: Model<T>, filter: Condition<T>, data: any, options = { new: true }) => new Promise((resolve, reject) => {
  model.updateMany(filter, data, options).then(result => resolve(result)).catch(err => reject(err));
});

const findAllDocuments = <T>(model: Model<T>, filter = {}, options: any = {}) => new Promise((resolve, reject) => {
  options.select ||= "-isDeleted -isActive -updatedAt -isSuperAdmin -userType";
  options.sort ||= { createdAt: "-1" }
  let query: any = model.find(filter);

  if (options.select) {
    query = query.select(options.select);
  }
  if (options.populate) {
    query = query.populate(options.populate);
  }
  if (options.lean) {
    query = query.lean();
  }
  query.exec().then((data: any) => resolve(data)).catch((err: any) => reject(err))
});




export default {
    findSingleDocument,
    createDocument,
    updateOneDocument,
    updateManyDocuments,
    findAllDocuments
};
