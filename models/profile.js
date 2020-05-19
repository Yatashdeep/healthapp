const mongoose=require('mongoose')
const profileSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    first_name:{type:String,required:false,minlength:0,maxlength:105,trim:true},
    last_name:{type:String,required:false,minlength:0,maxlength:105,trim:true},
    full_address:{type:String,required:false,minlength:0,maxlength:1005,trim:true},
    zip_code:{type:String,required:false,minlength:0,maxlength:105,trim:true},
    telephone_number:{type:String,required:true,minlength:0,maxlength:105,trim:true},
    Date_of_birth:{type:String,required:false,minlength:0,maxlength:105,trim:true},
    Sex:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Blood_group:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Height:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Weight:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Organ_donor:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Covid_tested:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Covid_condition:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Covid_date:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Covid_condition:{type:String,required:false,minlength:0,maxlength:15,trim:true},
    Allergies:{type:String,required:false,minlength:0,maxlength:10015,trim:true},
    Medications:{type:String,required:false,minlength:0,maxlength:10015,trim:true},
    Prior_surgeries:{type:String,required:false,minlength:0,maxlength:1015,trim:true},
    Medical_conditions:{type:String,required:false,minlength:0,maxlength:1015,trim:true},
    Additional_notes:{type:String,required:false,minlength:0,maxlength:1015,trim:true},
    Primary_physician:{type:String,required:false,minlength:0,maxlength:105,trim:true},
    Additional_contacts:{type:String,required:false,minlength:0,maxlength:105,trim:true},



})
module.exports=mongoose.model('profile',profileSchema)








// a)	First name
// b)	Last name
// c)	Full address
// d)	Telephone number ( cell/ home)
// e)	Date of birth (mm/dd/yyyy)
// f)	Sex (male/ female / other)
// g)	Blood group ( O+, O-, A+, A-, B+, B-, AB+, AB-, Unknown)
// h)	Height-  ft inches
// i)	Weight - lbs
// j)	Organ donor -  yes / no
// k)	Covid tested – Yes / No
// l)	If Yes -  Covid Postive/ Negative (Yes / No) if yes: date
// m)	Allergies: (None / or max 4 lines that are manually filled)
// n)	Medications: 7 lines ( placeholder text: Type and dose and time per day)
// o)	Prior surgeries: 5 line (placeholder text: Type of surgery – year next to main field of prior surgeries)
// p)	Medical conditions: 7 lines 
// q)	Any additional notes: 75 character limit
// r)	Primary Physician: 2 lines (placeholder text: Name – Telephone number)
// s)	Additional contacts: 3 lines (placeholder text: Name – Cell phone number)
