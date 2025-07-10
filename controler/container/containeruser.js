const userget=(req,res)=>{
    res.send("Fetching all user");
};
const usergetbyid=(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`)
};
const userpost=(req,res)=>{
    res.send("Adding a new user");
}
module.exports={
    userget,
    usergetbyid,
    userpost
}