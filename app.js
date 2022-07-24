const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")
const {courseModel}=require("./courseModel")

const app=express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
mongoose.connect("mongodb+srv://bhxrth:P8PPJ8Gr2@cluster0.q2q4z.mongodb.net/CollegeDB?retryWrites=true&w=majority")

app.post("/addcourse",async(req,res)=>{
    const data=req.body
    const ob=new courseModel(data)
    ob.save(
        (error,data)=>{
            if(error)
            {
                res.send("error occured"+error)

            }
            else
            {
                res.send(data)
            }
        }
    )


   
})
app.get("/viewcourse",async(req,res)=>{
    courseModel.find(
        (error,data)=>{
            if(error)
            {
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
    
})
app.get("/searchcourse",(req,res)=>{
    res.send("go to search course")
})
app.get("/updatecourse",(req,res)=>{
    res.send("to update course")
})
app.get("/deletecourse",(req,res)=>{
    res.send("delete the course")
})
app.listen(4000,()=>{
    console.log("server running on http://localhost:4000")
})