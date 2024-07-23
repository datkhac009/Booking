import  express  from "express";
const router = express.Router()
import {createProduct,getAllproduct} from "../controller/product.js"
router.route("/product").get(getAllproduct)
router.route("/product").post(createProduct)

export default router