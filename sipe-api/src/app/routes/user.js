const { Router } = require('express');
const router = Router();
const http = require('http');
const oracledb = require('oracledb');
const User_creation=require('../controller/users/userC') 

const user=new User_creation();
  
router.get('/user/show', (req, res) => {  
    res.send(user.getData()); 
}); 
   
router.get('/user/view', (req, res) => {  
    res.render('user_v/show_user.ejs',{datas:user.getData()}); 
});


module.exports = router;