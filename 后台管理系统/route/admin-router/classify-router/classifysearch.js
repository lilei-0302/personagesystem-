let { Classify } = require("../../../mongodb/classify");

module.exports = async(req, res) => {
    console.log(req.query);
    let page = Number(req.query.page) || 1

    //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 4
    let total = await Classify.countDocuments({ "producttype": new RegExp(req.query.producttype, "gi") })

    console.log(total);
    let startpage = (page - 1) * size

    // 计算总的页数
    let totalpage = Math.ceil(total / size)

    //查询数据
    const result = await Classify.find({ "producttype": new RegExp(req.query.producttype, "gi") }).limit(size).skip(startpage)
    console.log(result);


    //查询数据--用户列表
    res.render("./admin/classify/classifysearch", {
        lists: result,
        total: total,
        page: page,
        size: size,
        totalpage: totalpage,
        producttype: req.query.producttype
    })
}