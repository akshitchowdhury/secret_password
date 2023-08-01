import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
const app = express()

const port = 3001
const _dirname = dirname(fileURLToPath(import.meta.url))
var bandname
app.get("/", (req, res)=>{

    res.sendFile(_dirname+"/index.html")
})

app.use(bodyParser.urlencoded({extended:true}))



function test (req, res, next){

    console.log(req.body)
    bandname = req.body["email"] + req.body["password"]
    next()
}


app.use(test)

app.post("/submit", (req,res)=>{
    res.send(`<h1>Your band name generator is </h1> <h2> ${bandname} </h2>`)
})
app.listen(port,()=>{
    console.log(`listenin on port ${port}`)
})

