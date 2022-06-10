const query = require("../queries/parent")

const createParents = async function(req,res){
    try{
        const body = req.body;
        const obj = {
            name:body.name,
            email:body.email,
            password:body.password,
            mobileNo:body.mobileNo   
        }
        const data = await query.createParent(obj);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


const getAllParentDetails =async function(req,res){
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
    createParents,
    getAllParentDetails
};

