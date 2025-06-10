const express = require("express");
const router2 = express.Router()
const {User, Account} = require("../DataBase/db");
const { authMiddleware } = require("../middleware/middleware");


router2.get("/balance",authMiddleware ,async (req,res)=>{

    const account = await Account.findOne({
        userId : req.userId
    });

    res.json({
        balance : account.balance
    })

})

router2.post("/transfer" , authMiddleware, async (req,res)=>{

    const {amount,to} = req.body;

    const account = await Account.findOne({
        userId : req.userId
    })
    
    if(account.balance < amount){
        res.status(400).json({
            msg : "Insufficient Balance"
        })
    }

    const accountTo = await Account.findOne({
        userId : to
    })

    if(!accountTo){
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    Account.updateOne({
        userId : req.userId
    },{
        $inc : {balance : -amount}
    })

    Account.updateOne({
        userId : to
    },{
        $inc : {balance : amount}
    })

    res.json({
        msg : "Transfer Successfull"
    })

})

module.exports = router2;
