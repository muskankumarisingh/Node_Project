const db = require("../models");

const createAdmin = async(obj2) => {
    return await db.Parents.create(obj2);
}

const getAllAdminDetail = async()=>{
    return await db.Parents.findAll();
}


module.exports={
    createAdmin,
    getAllAdminDetail
};
