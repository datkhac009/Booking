import  express  from "express";
const router = express.Router()
import {createProduct} from "../controller/product.js"

router.route("/product").post(createProduct)

export default router