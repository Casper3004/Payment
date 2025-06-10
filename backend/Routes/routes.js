const express = require("express")
const router = express.Router();
const zod = require('zod')
const { User, Account } = require("../DataBase/db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware/middleware.js")

const signUpSchema = zod.object({
    userName: zod.string(),
    lastName: zod.string(),
    passWord: zod.string(),
    firstName: zod.string(),
});

router.post("/signUp", async function (req, res) {

    const body = req.body;

    const { success } = signUpSchema.safeParse(body);

    if (!success) {
        return res.json({
            msg: "Email Already Taken/ Wrong Inputs"
        })
    }

    const { userName } = body;

    const user = await User.findOne({
        userName
    })

    if (user?._id) {
        return res.json({
            msg: "Email Already Taken / Wrong Inputs"
        })
    }

    const dbUser = await User.create({
        userName: req.body.userName,
        passWord: req.body.passWord,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const userId = dbUser._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 1000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        msg: "User Created Successfully",
        token: token
    })
});



router.post("/signIn", async function (req, res) {

    const userName = req.body.userName;
    const passWord = req.body.passWord;

    console.log(userName);
    console.log(passWord);

    if (await User.findOne({
        userName: userName,
        passWord: passWord
    })) {
        const token = jwt.sign({ userId: User._id }, JWT_SECRET);

        res.json({
            token,
        })
    }
    else {
        res.json({
            msg: "User Not Found"
        })
    }

});

const updateBody = zod.object({

    passWord: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()

});

router.put("/user", authMiddleware, async (req, res) => {

    const { success } = updateBody.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            msg: "Error while updating information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        msg: "Updated Successfully"
    })

})

router.get("/bulk", async (req, res) => {

    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } },
            { lastName: { $regex: filter, $options: 'i' } }
        ]
    });

    res.json({
        user: users.map(user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})



module.exports = router;