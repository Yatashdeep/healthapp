const profile=require('../models/profile')

const mongoose=require('mongoose');

const bodyParser = require('body-parser');
const express=require('express'); 
const app=express();
const morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(morgan('dev'));

exports.register=(req,res,next)=>{
    console.log('hii')
    console.log('req',req)
    console.log('number',req.body)
    console.log('body',req.body.telephone_number)
profile.findOne({telephone_number:req.body.telephone_number})
.exec()
.then(data=>{
console.log('data',data)
if(data)
{
return res.status(200).json({
   message:'Telephone already Exist' 
});
}
else
{
    const profile_user=new profile({
       _id:mongoose.Types.ObjectId(),
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       full_address:req.body.full_address,
       telephone_number:req.body.telephone_number,
       Date_of_birth:req.body.Date_of_birth,
       Sex:req.body.Sex,
       Blood_group:req.body.Blood_group,
       Height:req.body.Height,
       Weight:req.body.Weight,
       Organ_donor:req.body.Organ_donor,
       Covid_tested:req.body.Covid_tested,
       Covid_condition:req.body.Covid_condition,
       Covid_date:req.body.Covid_date,
       Allergies:req.body.Allergies,
       Medications:req.body.Medications,
       Prior_surgeries:req.body.Prior_surgeries,
       Medical_conditions:req.body.Medical_conditions,
       Additional_notes:req.body.Additional_notes,
       Primary_physician:req.body.Primary_physician,
       Additional_contacts:req.body.Additional_contacts


    })
    profile_user.save().then(result=>{
        res.status(200).json({
            message:'User Created'
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
             });
    })
}
})
}

exports.fetch_register=(req,res,next)=>{
profile.find().exec().then(data=>{
    console.log(data)
    return res.status(200).json({  message:data   });  
}).catch(err=>{
    res.status(200).json({
        error:err
         });
})
}












