const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://preetarora3004:GxVtFUbQCptJQoTi@cluster0.gzdjp3l.mongodb.net/")

const UserSchema = new mongoose.Schema({

    userName : {
        type : "String",
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },
    passWord : {
        type : "String",
        required : true,
        minLength : 6
    },

    firstName : {
        type : "String",
        required : true,
        trim : true,
        maxLength : 50
    },

    lastName : {
        type : "String",
        required : true,
        trim : true,
        maxLength : 50
    }
})

const AccountSchema = new mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,    // Reference to User Table
        ref : "User",
        required : true,
    },

    balance : {
        type : Number,
        required : true
    }
});

const User = mongoose.model("User", UserSchema);

const Account = mongoose.model("Account", AccountSchema);

module.exports = {
    User,
    Account
}