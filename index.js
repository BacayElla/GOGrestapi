const express = require ('express');
const app = express();
 const mongoose = require ('mongoose');
require ('dotenv').config();
 const PORT = process.env.PORT || 3000


mongoose.connect(
    process.env.MONGO_URL,
{useNewUrlParser:true}
).then(() =>{
   console.log ("connected to Mongoosedb") 
}).catch(error =>{
    console.log ("Error", error);
})
 app.listen(PORT, ()=>{
     console.log ("Server started at PORT", PORT);
 })