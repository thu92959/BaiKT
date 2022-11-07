var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

//CONECTING DB// APP CONFI
// mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://hathu:hathu123@cluster0.o3gff93.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

//Schema
let user3Schema = mongoose.Schema({
  idDistrict : {
    type: String,
  },
  idVillage: {
    type: String,
  },
  address: {
    type: String,
  },
  isGetNotification : {
    type: String,
  },
  isVerified : {
    type: String,
  },
  isGetOpen : {
    type: String,
  }
})

//MODEL
let User3 = mongoose.model('User3', user3Schema);

/* GET home page. */
router.get('/', function(req, res, next) {
  User3.find({}, (error, data)=>{
    console.log('User 3', data);
    res.render('index', {User3: data} );

  })
});

//form add
 router.get('/form-add', function(req, res, next){
  res.render('form-add', {});
 });
 router.post('/add', function(req,res,next){
  User3.create(req.body);
  res.redirect('/');
 });

 //form update
 router.get('/form-update/:id', function(req, res, next){
  User3.findById(req.params.id, (error,data)=>{
    res.render('form-update',{User3:data})
  })
 });
 router.post('/update', function(req,res,next){
  User3.findByIdAndUpdate(req.body.id, req.body, (error, data)=>{
    res.redirect('/')
  })
 })

  //form delete
  router.get('/form-delete/:id', function(req, res, next){
    User3.findByIdAndDelete(req.params.id, (error,data)=>{
      res.redirect('/')
    })
   });
module.exports = router;
