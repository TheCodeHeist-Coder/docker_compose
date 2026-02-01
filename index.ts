import express from 'express';
import {prisma} from "./lib/prisma"

const app  = express();

app.get("/", async(req, res) => {

   const data = await prisma.user.findMany();
   res.json({
    data
   })


    res.json({
        "message": "GET Endpoint"
    })
})


app.post("/", async(req, res) => {
     await prisma.user.create({
        data:{
           username: Math.random().toString(),
           password: Math.random().toString() 
        }
    })
    res.json({
        "message": "POST Endpoint"
    })
})




app.listen(4000, () => {
    console.info(`srvr is running...`)
})