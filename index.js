//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express'
import bodyParser from 'body-parser'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const port = 3000
const _dirname = dirname(fileURLToPath(import.meta.url))
var pass = ""
app.get("/", (req,res)=>{
    res.sendFile(_dirname+"/public/index.html")
})

app.use(bodyParser.urlencoded({extended:true}))

function custom(req,res,next){
   pass =  req.body["password"]
   next()
}

app.use(custom)

app.post("/check", (req,res)=>{

    if(pass=="ILoveProgramming")
{

    res.sendFile(_dirname+"/public/secret.html")
}   
else{
    res.sendFile(_dirname+"/public/index.html")
}
})

app.listen(port, ()=>{

    console.log(`listening to port ${3000}`)
})

