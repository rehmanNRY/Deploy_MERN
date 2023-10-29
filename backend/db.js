const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abdulrrehman10:Abdul@@123@cluster0.856oivp.mongodb.net/";
const connectToMongo = ()=>{
   try {
      mongoose.connect(mongoURI, ()=>{
         console.log("Connected to mongo successfully");
      })
   } catch (error) {
      console.log("Error connecting with mongoose database");
   }
}
module.exports = connectToMongo;