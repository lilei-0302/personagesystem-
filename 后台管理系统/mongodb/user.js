const mongoose = require("mongoose");
require("./database")
    //创建一个用户集合规则
const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "用户名不能为空"],
            minlength: 1,
            maxlength1: 16,
            trim: true
        },
        password: {
            type: String,
            required: [true, "密码不能为空"],
            minlength: 6,
            maxlength1: 20,
            trim: true
        },
        sex: {
            type: String,
            required: [true, "性别不能为空"],
            enum: {
                values: ["男", "女", "保密"]
            },
            message: "选择正确的性别"
        },
        age: {
            type: Number,
            min: 10,
            max: 100
        },
        address: {
            type: String
        }
    })
    //使用集合规则创建集合
const User = mongoose.model("User", UserSchema);

//暴露
module.exports = {
    User
}