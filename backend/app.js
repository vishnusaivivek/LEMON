const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors = require('cors');
const multer=require('multer');
const userRoutes=require('./api/routes/user');
const shopRoutes=require('./api/routes/shop');
const reviewroutes=require('./api/routes/review')
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://vishnusaivivek:viveK$1998@cluster0-ihrpz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use('/user',userRoutes);
app.use('/shop',shopRoutes);
app.use('/review',reviewroutes);

module.exports=app;