const query = require("../queries/child")
//const authentication = require("../auth/jwt")

const createChilds = async function(req,res){
    try{
        const body = req.body;
        const obj1 = {
            name:body.name,
            email:body.email,
            password:body.password,
            mobileNo:body.mobileNo  
        }
        const data = await query.createStudent(obj1);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


const getAllChildDetails =async function(req,res){
    try{
        const result = await query.getAllStudentDetail();
        return res.send(result);
    }
    catch(err){
        res.send(err)
    }
}


module.exports={
    createChilds,
    getAllChildDetails
}




