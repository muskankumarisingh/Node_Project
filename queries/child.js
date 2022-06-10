const res = require("express/lib/response");
const db = require("../models");

const createChild = async(obj1) => {
    return await db.students.create(obj1);
}


const getAllChildDetail = async()=>{
    return await db.students.findAll();
}

const getUserBymobileNo = async(mobileNumber)=>{
    const mobileOtp =await db.students.findOne({where:{mobileNo:mobileNumber.mobileNo}})
    return mobileOtp
}

    



module.exports={
    createChild,
    getAllChildDetail,
    getUserBymobileNo
};


