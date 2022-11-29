const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const data=require("./data.js")

const db_conection = async()=>{
    var uri = `mongodb://user:user@ac-n01obt8-shard-00-00.bt3urul.mongodb.net:27017,ac-n01obt8-shard-00-01.bt3urul.mongodb.net:27017,ac-n01obt8-shard-00-02.bt3urul.mongodb.net:27017/?ssl=true&replicaSet=atlas-dvq4sq-shard-0&authSource=admin&retryWrites=true&w=majority`
   try{
  await mongoose.connect(uri , {useNewUrlParser :true})
  console.log("conected")
   }catch(err){
    console.log("not conected")
   }
}

db_conection();
app.use(cors())

const studentSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true,
       // unique:true
    },
   
    link:{
        type:String,
        require:true
    },
    timestamp:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
        require:true
    },
})
//modal
const student=mongoose.model("student",studentSchema)

// send data
const creatitem=async(data)=>{
    
    try{
     const res= await student.insertMany(data.module)
    
      
       console.log(res)  
        
  
    }catch(err){
console.log(err)
    }
}

// creatitem(data)
// read item
const readItem=async()=>{
    try{
        const res=await student.find();
        console.log(res)
    
    }catch(err){
        console.log(err)
    }
}
//readItem()

// creat route
const route=express.Router();
route.get('/news',async(req,res)=>{
    try{
     const data= await student.find({})
     console.log(data)
      res.status(200).json(data)
    }catch(err){
        res.status().json(500).json({message:data.message})
    }
})
app.use('/',route)

app.listen(5500,()=>{
    console.log("server is runing 5500")
})
