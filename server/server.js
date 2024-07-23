
import express from "express";
import dotEnv from "dotenv"
import { PORT } from './utils/secrets.js'
import routerProduct from "./router/router.js"
// import bodyParser from "body-parser";
dotEnv.config({path:'./.env'})

// app.use(bodyParser.json())

const app = express();
const port = process.env.PORT || PORT;
app.use(express.json())
app.use("/api",routerProduct)
app.get('/',(req, res) => {
    res.json({message:"Hello word"})
})
app.listen(port,() => {
    console.log(`Connect to ${port}`);
})
