const mongoose = require("mongoose");
const taskmodel=require('../MODELS/Taskmodel')

// To create a Task - POST
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await taskmodel.create({ title, description });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const getTask= async  (req,res)=>{
  try{
    const tasks=await taskmodel.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}
const getSingleTask=async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({message:"Task not found"})
  }
  try{
    const singletasks=await taskmodel.findById(id);
    res.status(200).json(singletasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }

}
const updateTask=async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Task not found"})
  }
  try{
    const task=await taskmodel.findByIdAndUpdate({
      _id:id},
      {
        ...req.body
      });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}
const deleteTask=async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({message:"Task not found"})
  }
  try{
    const task=await taskmodel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
// try {
   
//   const dlt= taskmodel.findOneAndDelete(title);
//   res.json(`the user userid:${dlt}deleted succesfully`)
  
  
  
  // (
  //   {_id:userid},function(err,res){
  //     console.log(err);
  //   });
  //   res.send({status:"ok",data:"deleted"})
// }catch(error){
//  res.status(400).json({error:error.message})
// }


}

module.exports = { createTask,getTask,getSingleTask,updateTask,deleteTask};