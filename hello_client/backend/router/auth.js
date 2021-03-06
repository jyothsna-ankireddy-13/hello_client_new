const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
require('../db/dbconnection');
const Owner = require("../models/ownerSchema")
const Customer = require("../models/customerSchema")



router.get('/', (req, res)=>{
    
    res.render("/dashboard")

});



router.post("/log",async(req,res)=>{

    
    
    try{
        
        const {email,password} = req.body;
         if( !email || !password){
            return res.status(400).json({error:"plz fill the required fields"});
            
        }

        const owneremail = await Owner.findOne({email});
        //console.log(owneremail);
        if(owneremail){

            if(owneremail.password===password){
                //res.json({message:" success"});
                res.redirect("/dashboard")
            
            
            }else{
            res.status(400).json({error:"Invalid Credentials"})
            }
        }else{
                res.status(400).json({error:"Invalid Email"})
        }
    }catch(error){
        console.log(error)
    }
})



router.post('/savedata',async(req,res)=>{
    
    const {email,password} = req.body;
    if( !email || !password){
            return res.status(422).json({error:"plz fill the required fields"});
        }
    try{
        const ownerExist = await Owner.findOne({email});

        if(ownerExist){
            return res.status(422).json({error:"Owner already exist"})
        }
        const owner = new Owner({email,password})
            //new file
        await owner.save()
        res.status(201).json({message:"owner added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})

router.post('/addcustomer',async(req,res)=>{
    
    const {fullName,email,mobile,projectName,companyName} = req.body;
    if(!fullName || !email || !mobile || !projectName || !companyName){
            return res.status(422).json({error:"plz fill the required fields"});
        }
    try{
        const customerExist = await Customer.findOne({email});

        if(customerExist){
            return res.status(422).json({error:"customer already exist"})
        }
        const customer = new Customer({fullName,email,mobile,projectName,companyName})
            //new file
        await customer.save()
        res.status(201).json({message:"Customer added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})


module.exports = router;