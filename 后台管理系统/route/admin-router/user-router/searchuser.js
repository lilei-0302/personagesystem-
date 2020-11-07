const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {

    console.log(req.query); // { username: '456' }
    let page = Number(req.query.page) || 1

    //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 4

    //查询数据库中User集合中总共有多少条数据
    let total = await User.countDocuments({ "username": new RegExp(req.query.username, "gi") })

    console.log(total);
    let startpage = (page - 1) * size

    // 计算总的页数
    let totalpage = Math.ceil(total / size)

    //查询数据
    const result = await User.find({ "username": new RegExp(req.query.username, "gi") }).limit(size).skip(startpage)
    console.log(result);


    //查询数据--用户列表
    res.render("./admin/searchuser", {
        lists: result,
        total: total,
        page: page,
        size: size,
        totalpage: totalpage,
        username: req.query.username
    })
}