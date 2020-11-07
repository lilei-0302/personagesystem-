const { User } = require("../../../mongodb/user")
const login = require("./login")
module.exports = async(req, res) => {
    console.log(req.query.id);
    let result = await User.updateOne({ "_id": req.query.id }, {
        username: req.body.username,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    })
    console.log(result);

    if (result) {
        res.redirect("/admin/userlist")
    }
}