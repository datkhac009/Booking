
// import express from 'express';

// const app = express()
// const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//   res.send('Hello World My Project 123')
// })

// app.listen(port, () => {
//   console.log(`Hello Example app listening on port ${port}`)
// })
import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json())
app.get('/',(req, res) => {
    res.send('Hello Word')
})
app.listen(PORT,() => {
    console.log(`Connect to ${PORT}`);
})