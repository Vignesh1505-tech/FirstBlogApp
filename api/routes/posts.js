const router=require("express").Router();
const User =require("../models/User");
const Post=require('../models/Post')

//Create New Post
router.post("/",async  (req,res)=>{
    const newPost =new Post(req.body);
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err)
    }
    
});

//Update Post
router.put("/:id",async  (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){

        try{
             const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
             },{new:true});
             res.status(200).json(updatedPost);

        }catch(err){
            res.status(500).json(err);

        }
    } else{
        res.status(401).json("You can Update Post Only")
    }
    }catch(err){
        res.status(500).json(err)
    }
    
})

//Delete Post
router.delete("/:id",async  (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){

        try{
             await Post.findByIdAndDelete(req.params.id);
             res.status(200).json("Post has been Deleted");

        }catch(err){
            console.log(err)
            res.status(500).json(err);

        }
    } else{
        res.status(401).json("You can delete Only your post")
    }
    }
    catch(err){

        res.status(500).json(err)
    }
    
});

//GET Post
router.get("/:id", async (req,res)=>{
    try{
        const post =await Post.findById(req.params.id)
        res.status(200).json(post)

    }catch(err){
        res.status(500).json(err)
    }
});

//Get all Post
router.get("/", async (req,res)=>{
    const username=req.query.user;
    const catNmae=req.query.cat;

    try{
        let posts;
        if(username){
            posts=await Post.find({username})
        }else if(catNmae){
            posts=await Post.find({categories:{
                $in:[catNmae]
            }})
        }else{
            posts=await Post.find();
        }
        res.status(200).json(posts);

    }catch(err){
        res.status(500).json(err)
    }
});

module.exports=router