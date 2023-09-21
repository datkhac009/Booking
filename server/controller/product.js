import expressAsyncHandler from "express-async-handler"

const createProduct = expressAsyncHandler(async(req,res,next)=>{
    const {fullname,pass} = req.body
    if(!fullname || !pass){
        res.status(404)
        throw new Error("Loi")
    }
    res.status(202).json({message:{name:fullname,pass:pass}})
})
export  {createProduct}