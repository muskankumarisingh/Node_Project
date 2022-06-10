const db = require("../models");

const createParent = async(obj) => {
    return await db.Parents.create(obj);
}

const getAllParentDetail = async()=>{
    return await db.Parents.findAll();
}


module.exports={
    createParent,
    getAllParentDetail
};

