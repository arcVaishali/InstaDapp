const router = require('express').Router();
const Posts = require("../models/posts.model");
const fs = require("fs");
var path = require("path")
const { postImage } = require("../middleware/post")
var multer = require("multer");
var path = require("path");
var Image =require("../models/image.model")


var storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({storage : storage}).single('image') 

 router.route("/Posts").get(async(req, res)=>{
    try {
        const images = await Image.find();
         const imagesWithBase64 = images.map((image) => {
           const base64Image = Buffer.from(image.img.data).toString("base64");

          return {
            userName: image.userName,
            postTitle: image.postTitle,
            img: {
              contentType: image.img.contentType,
              data: base64Image,
            },
            mint:image.mint,
            like:image.like,
          };
        });
        //console.log(imagesWithBase64)
       //  res.json(imagesWithBase64);
       // res.render("images",{items : images})
       console.log(imagesWithBase64)
      

        res.json(imagesWithBase64)
         
      
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
 }) 

 router.route("/Posts").post((req,res)=>{
    upload(req,res,err=>{
        if(err){
            console.log(err);
            return res.status(500).json({error : 'File upload failed'})
        }
        else{
            const newImage = new Image({
                userName : req.body.userName,
                postTitle : req.body.postTitle,
                img  :{
                    data: fs.readFileSync(path.join(__dirname , '../uploads/' + req.file.filename)),
                    contentType  : "image/jpeg"
                },
                mint : req.body.mint

            })
            newImage.save()
            .then(()=>{
           
                
                res.status(200).json({message:'Success'})
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json({error : 'Server Error '})
            })
        }
    })
 });

 router.route("/getPostId").get(async (req, res) => {
  try {
    const userName = req.query.userName;
    const postTitle = req.query.postTitle;
    const mint = req.query.mint;
    const like = req.query.like;

    const image = await Image.find({
      userName,
      postTitle,
      mint,
      like,
    });

    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


 // Add a comment to a post
router.route("/Posts/:postId/comments").post( async (req, res) => {
    try {
      const postId = req.params.postId;
      const post = await Image.findById(postId);
      //console.log(post)
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Create a new comment
      const newComment = {
        userName: req.body.userName,
        text: req.body.text,
        
      };
  console.log(newComment)
      // Add the comment to the post's comments array
      post.comments.push(newComment);
  
      // Save the updated post
      const savedPost = await post.save();
  
      res.json(savedPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Retrieve comments for a post
  router.route("/Posts/:postId/comments").get(async (req, res) => {
    try {
      const postId = req.params.postId;
      const post = await Image.findById(postId);
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      res.json(post.comments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.route("/Posts/:postId/like").put(async(req,res)=>{
    try{  
      const postId = req.params.postId;
      const post = await Image.findById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      console.log(post.like);
      post.like+=1
      const updatedPost = await post.save();

      res.json(updatedPost);
  

    }

    catch(error){
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  

 module.exports =router;