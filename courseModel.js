const mongoose=require("mongoose")

const courseModel=mongoose.model("courses",mongoose.Schema({
    courseTitle:String,
    courseDescription:String,
    courseDuration:String,
    courseDate:String,
    courseVenue:String
}))
module.exports={courseModel}