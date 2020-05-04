const express=require('express');
const router=express.Router();
const app=express();
const User=require('../models/userschema');
const mongoose=require('mongoose');
const bcrypt = require('bcrypt'); 
const multer=require('multer');
const storage = multer.diskStorage({
  destination: function(req, file,cb) {
      cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) =>{
  if(file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
      cb(null, true);
  }
  else {
  cb(new Error('message'), false);
  }
}
const upload = multer({
  storage:storage,
  fileFilter:fileFilter
   
  
}).single('profilephoto');

router.post('/registration',upload,(req,res,next)=>{
    User.find({email:req.body.mail})
    .exec()
    .then(issue=>{
      if(issue.length>=1){
        return res.status(409).json({
              message:'Mail exists' 
        });
      }
      else{
        
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err)
          {
              return res.status(500).json({
                  error:err
              });
          }
          else{
            
            const user=new User({
              
              _id:new mongoose.Types.ObjectId(),
              name:req.body.name,
              mail:req.body.mail,
              gender:req.body.gender,
              phoneno:req.body.phoneno,
              alternateph:req.body.alternateph,
              dob:req.body.dob,

              profilephoto:req.file.path,
              //profilephoto:req.body.profilephoto,
              password:hash,
              securityqun:req.body.securityqun,
              securityans:req.body.securityans
            
          });
          user.save().then(result=>{
            console.log(result);
            res.status(201).json({
              message:"user created \n registration successful"
            });
          }).catch(err=>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
        }

      });
    }
    
    });
});
     
 router.get('/byId/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.post('/login', (req, res, next)  => {
  User.find({ mail: req.body.mail})
  .exec()
  .then(issue => {
          if(issue.length < 1)
          {
              return res.status(401).json({
                  message : "Authentication failed"
              });
          }
          bcrypt.compare(req.body.password, issue[0].password, (err, result) => {
              if(err) {
                
                  return res.status(401).json({
                      message : "Authentication failed"
                  });
              }
              if(result) {
                  
                  return res.status(200).json(issue);
          }
          return res.status(401).json({
              message : "Authentication failed"
          });
      });
  
  
}); 
});
router.post("/forget", (req, res, next)  => {
       User.find({mail: req.body.mail })
      .exec()
       .then(issue => {
                if(issue.length < 1)
                {
                    return res.status(401).json({
                        message : "user not found "
                    });
                }
               else{
                 if(req.body.securityans==issue[0].securityans && req.body.securityqun==issue[0].securityqun){
                   console.log("matched");
                   bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err)
                    {
                        return res.status(500).json({
                            error:err
                        });
                    }
                    else{

                          
                          issue[0].password=hash;
                         issue[0]
                          .save()
                          .then(issue => {
                               console.log(issue);
                               res.json('update done');
                               })
                          .catch(err => {
                          res.status(400).send('Update failed');
                          });
                        }
                      });
                    }
                   

                }
              });
            });
        
router.get('/getusers', (req, res, next) => {
  User.find()
    .exec()
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});          


module.exports = router;