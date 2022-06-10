const query = require("../queries/admin")

const createAdmins = async function(req,res){
    try{
        const body = req.body;
        const obj2 = {
            name:body.name,
            email:body.email,
            password:body.password ,
            mobileNo:body.mobileNo   
        }
        const data = await query.createParent(obj2);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

const getAllAdminDetails =async function(req,res){
    try{
        const result = await query.getAllParentDetail();
        return res.send(result);
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
}

module.exports={
    createAdmins,
    getAllAdminDetails
};

