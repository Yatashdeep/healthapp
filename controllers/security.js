
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
    console.log('body',req.body.Email)
profile.findOne({Email:req.body.Email})
.exec()
.then(data=>{
console.log('data',data)
if(data)
{
return res.status(200).json({
   message:'Email-Id already Exist' 
});
}
else
{
    const profile_user=new profile({
       _id:mongoose.Types.ObjectId(),
    //    first_name:req.body.first_name,
    //    last_name:req.body.last_name,
    //    full_address:req.body.full_address,
        Email:req.body.Email,
       zip_code:req.body.zip_code,
    //    telephone_number:req.body.telephone_number,
       Date_of_birth:req.body.Date_of_birth,
       Sex:req.body.Sex,
    //    Blood_group:req.body.Blood_group,
    //    Height:req.body.Height,
    //    Weight:req.body.Weight,
    //    Organ_donor:req.body.Organ_donor,
       Covid_tested:req.body.Covid_tested
    //    Covid_condition:req.body.Covid_condition,
    //    Covid_date:req.body.Covid_date,
    //    Allergies:req.body.Allergies,
    //    Medications:req.body.Medications,
    //    Prior_surgeries:req.body.Prior_surgeries,
    //    Medical_conditions:req.body.Medical_conditions,
    //    Additional_notes:req.body.Additional_notes,
    //    Primary_physician:req.body.Primary_physician,
    //    Additional_contacts:req.body.Additional_contacts


    })
    profile_user.save().then(result=>{
        res.status(200).json({
            message:'User Created',
            result:result
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

exports.update_profile=(req,res,next)=>{
    profile.findOne({_id:req.body.userid}).exec().then(doc=>{
        // doc.first_name=req.body.first_name,
        // doc.last_name=req.body.last_name,
        // doc.full_address=req.body.full_address
        doc.Email=req.body.Email
         doc.zip_code=req.body.zip_code
        // doc.telephonenumber=req.body.telephone_number,
         doc.Date_of_birth=req.body.Date_of_birth,
         doc.Sex=req.body.Sex,
        // doc.Blood_group=req.body.Blood_group,
        // doc.Height=req.body.Height,
        // doc.Weight=req.body.Weight,
        // doc.Organ_donor=req.body.Organ_donor,
         doc.Covid_tested=req.body.Covid_tested,
        // doc.Covid_condition=req.body.Covid_condition,
        // doc.Covid_date=req.body.Covid_date,
        // doc.Allergies=req.body.Allergies,
        // doc.Medications=req.body.Medications,
        // doc.Prior_surgeries=req.body.Prior_surgeries,
        // doc.Medical_conditions=req.body.Medical_conditions
        // doc.Additional_notes=req.body.Additional_notes,
        // doc.Primary_physician=req.body.Primary_physician,
        // doc.Additional_contacts=req.body.Additional_contacts,
        doc.save().then(
            (result)=>{
              
                    return res.status(200).json({ message:"Your profile updated successfully",getdata:result,status:1 });
          
            }
        ).catch(err=>{
            return res.status(200).json({ message:"Your profile updated successfully.",getdata:err,status:0 });
        })
       
    }).catch(err=>{
        return res.status(200).json({ message:"Please try again later",status:0  }); 
    })

}


exports.add_contact=(req,res,next)=>{
    profile.findOne({_id:req.body.userid}).exec().then(data=>{
        data.add_contact=req.body.add_contact
        data.save().then((result)=>{
        return res.status(200).json({message:'Contact Updated Successfully',Status:true,data:result})
        }).catch(err=>{
        return res.status(200).json({message:"Error",Status:false,data:err})
        })
    }).catch(err=>{
        return res.status(200).json({message:"Error",Status:false,data:err})
    })
}











