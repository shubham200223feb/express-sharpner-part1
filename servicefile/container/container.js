const path = require("path");
const filepath= path.join(__dirname,"../view/product.html");
const  service=require("../service/serviceproduct.js");
const getProduct=(req,res)=>{
    res.sendFile(filepath);
};
const getproductbyid=(req,res)=>{
    const id =req.params.id;
    const result=service.productByid(id);
    res.send(result);
}
const postproduct=(req,res)=>{
    const result=service.productp();
    res.send(result);
}
module.exports={
    getProduct,
    getproductbyid,
    postproduct
}