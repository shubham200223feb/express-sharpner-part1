const cartbyid=(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching cart  with userID: ${id}`)
};
const cartpost =(req,res)=>{
    const id = req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`);
};
module.exports={
    cartbyid,
    cartpost
}