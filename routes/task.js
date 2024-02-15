const express=require('express')
const router =express.Router()
const Task= require('../models/Task')

router.post('/create' ,async(req,res)=>{
    try {
       // const taskTitle=req.body.title;
        //const taskComplete=req.body.completed;
        //const task =new Task({title:taskTitle, completed:taskComplete});

        const task =await Task.create({...req.body,completed:false})
        //await task.save();//.create() tambien valdria
        res.status(201).json(task);
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/',async(req,res)=>{
    try {
        const tasks= await Task.find()
        res.json(tasks)
    } catch (error) {
        console.log(error)
        
    }
})

router.get('/id/:id', async (req, res) =>{
    try {
        const task= await Task.findById(req.params._id)
        res.json(task)
    } catch (error) {
        console.log(error)
    }
})

router.put('/markAsCompleted/:_id',async(req,res)=>{
try {
    const idTask=req.params._id
    const  task=await Task.findByIdAndUpdate(
        idTask,{
            completed:true},{
        new: true
        })
        res.json(task)
} catch (error) {
    console.log(error)
}})

router.put('/id/:id', async (req, res) =>{
    try {
        const id=req.params._id
        const title=req.body.title
        const task= await  Task.findOneAndUpdate(
            id,{title
             },
             {
                new:true
            })
             res.json(task)
    } catch (error) {
        console.log(error)
        
    }
    });

router.delete('/id/:id', async (req, res) =>{
    try {
        const id=req.params._id
       
        const task= await  Task.findByIdAndDelete(id)
            
             res.json({mensaje:`${task} delete`})
    } catch (error) {
        console.log(error)
    }
})
module.exports= router