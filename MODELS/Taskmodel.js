// const mongoose = require("mongoose");



// const TaskSchema = new mongoose.Schema ({
//   title: {
//       type: String,
//       require: true,
//     },
//   description: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Task", TaskSchema);
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const TaskSchema=new Schema(
    {
        title:{
            type:String,
            require:true,
        },
        description:{
            type:String,
        }
    },{timestamps:true}
);
module.exports=mongoose.model("tasks",TaskSchema)