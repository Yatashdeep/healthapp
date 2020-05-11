const express=require('express');
const router=express.Router();
const path=require('path')
const userapi=require('../controllers/security')
router.use(express.json());
router.get('/',(requestAnimationFrame,res)=>{
   res.send('server up..')  
})
router.post('/register_profile',userapi.register)
router.get('/fetch_all',userapi.fetch_register)

module.exports=router