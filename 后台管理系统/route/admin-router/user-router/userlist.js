const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {

    //page代表请求的页数
    let page = Number(req.query.page) || 1
        //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 4
        //查询数据库中User集合总共有多少条数据
    let total = await User.countDocuments({})
        //开始页
    let startpage = (page - 1) * size
        //计算总的页数
    let totalpage = Math.ceil(total / size)

    //查询数据
    const result = await User.find({}).skip(startpage).limit(size)


    res.render("./admin/userlist.ejs", {
        lists: result,
        total: total,
        page: page,
        size: size,
        totalpage: totalpage
    })

}