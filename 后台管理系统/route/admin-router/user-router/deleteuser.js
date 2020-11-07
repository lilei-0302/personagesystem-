const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {
    console.log(req.body.id);
    let result = await User.findOneAndDelete({ "_id": req.body.id })
    console.log(result);
    if (result) {
        res.redirect("/admin/userlist")
    }
}