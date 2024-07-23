import expressAsyncHandler from "express-async-handler"

const getAllproduct = expressAsyncHandler(async(req,res,next)=>{
    const data = req.body
    console.log(data)
    if(!data){
        res.status(404)
        throw new Error("Loi")
    }
    res.status(202).json({data})
    // const allData = data.find(data)
    // if(!allData){
    //     res.status(404)
    //     throw new Error("Loi")
    // }
    // res.status(202).json({message:{allData}})
})
const createProduct = expressAsyncHandler(async(req,res,next)=>{
    const {fullname,pass} = req.body
    const data = {fullname,pass}
    if(!fullname || !pass){
        res.status(404)
        throw new Error("Loi")
    }
    res.status(202).json({message:{name:fullname,pass:pass}})
    console.log(data)
})
export  {createProduct,getAllproduct}