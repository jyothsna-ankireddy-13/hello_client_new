const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
require('../db/dbconnection');

const Quotation = require("../models/quotationSchema")
const Performa = require("../models/performaSchema")
const Invoice = require("../models/invoiceSchema")



router.get('/', (req, res)=>{
    
    res.render("/dashboard")

});


router.post('/addquotation',async(req,res)=>{
    
    const {sendDate,quoteNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage} = req.body;
    if(!sendDate || !quoteNumber || !price || !reminderDate || !createdBy || !sendTo || !paymentMode || !billImage){
            return res.status(400).json({error:"plz fill the required fields"});
        }
    try{
        const quotationExist = await Quotation.findOne({quoteNumber});

        if(quotationExist){
            return res.status(400).json({error:"Quotation already exist"})
        }
        const quotation = new Quotation({sendDate,quoteNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage})
            //new file
        await quotation.save()
        res.status(201).json({message:"Quotation added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})

router.post('/addperforma',async(req,res)=>{
    
    const {sendDate,performaNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage} = req.body;
    if(!sendDate || !performaNumber || !price || !reminderDate || !createdBy || !sendTo || !paymentMode || !billImage){
            return res.status(422).json({error:"plz fill the required fields"});
        }
    try{
        const performaExist = await Performa.findOne({performaNumber});

        if(performaExist){
            return res.status(422).json({error:"Performa already exist"})
        }
        const performa = new Performa({sendDate,performaNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage})
            //new file
        await performa.save()
        res.status(201).json({message:"Performa added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})
router.post('/addinvoice',async(req,res)=>{
    
    const {sendDate,invoiceNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage} = req.body;
    if(!sendDate || !invoiceNumber || !price || !reminderDate || !createdBy || !sendTo || !paymentMode || !billImage){
            return res.status(422).json({error:"plz fill the required fields"});
        }
    try{
        const invoiceExist = await Invoice.findOne({invoiceNumber});

        if(invoiceExist){
            return res.status(422).json({error:"Performa already exist"})
        }
        const invoice = new Invoice({sendDate,invoiceNumber,price,reminderDate,createdBy,sendTo,paymentMode,billImage})
            //new file
        await invoice.save()
        res.status(201).json({message:"Performa added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})


module.exports = router;