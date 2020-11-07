//修改用户
const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {
    console.log(req.query);
    let result = await User.findOne({ "_id": req.query.id })
    res.render("./admin/edituser.ejs", {
        editData: result
    })
}