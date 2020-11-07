//按需引入db暴露的模块
const { User } = require("../../../mongodb/user")
const md5 = require("md5");
module.exports = async(req, res) => {
    console.log(req.body);
    let uname1 = await User.findOne({ username: req.body.username })

    if (!uname1) {
        let userInfo = {
            username: req.body.username,
            password: md5(req.body.password),
            sex: req.body.sex,
            age: req.body.age,
            address: req.body.address
        }
        let result = await User.create(userInfo)
        if (result) {
            res.redirect("/admin/userlist")
        }
    } else {
        console.log("名字重复");
    }

}