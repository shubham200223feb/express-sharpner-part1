const productget=(req,res)=>{
    res.send("Fetching all products");
};
const productgetByid=(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`)
};
const productpost=(req,res)=>{
    res.send("Adding a new product");
}
module.exports={
    productget,
    productgetByid,
    productpost
}