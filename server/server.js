
import express from "express";
import dotEnv from "dotenv"
import { PORT } from './utils/secrets.js'
import routerProduct from "./router/router.js"
dotEnv.config({path:'./.env'})

const app = express();
const port = process.env.PORT || PORT;
app.use(express.json())
app.use("/api",routerProduct)
app.get('/',(req, res) => {
    res.send('Hello Word')
})
app.listen(port,() => {
    console.log(`Connect to ${port}`);
})
