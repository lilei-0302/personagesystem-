const { Product } = require("../../../mongodb/product")
module.exports = async(req, res) => {
    console.log(req.query.title);
    //接收前端传递过来的页数,代表前端请求那一页的数据
    let page = Number(req.query.page) || 1
        //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 5
    console.log(req.query)


    //查询数据库中Product集合中总共有多少条数据
    let total = await Product.countDocuments({
        title: new RegExp(req.query.title, "gi"),
        price: { $gt: Number(req.query.price1), $lt: Number(req.query.price2) }
    })
    console.log(total);
    let startpage = (page - 1) * size

    // 最小价格初始值
    let min = req.query.price1 || 0

    //最大价格初始值
    let max = req.query.price2 || 10000000

    //计算总的页数
    let totalpage = Math.ceil(total / size)

    //查询数据
    const result = await Product.find({
        title: new RegExp(req.query.title, "gi"),
        price: { $gt: min, $lt: max }
    }).skip(startpage).limit(size)
    console.log(result);
    res.render("./admin/product/productsearch.ejs", {
        total: total,
        page: page,
        size: size,
        totalpage: totalpage,
        lists: result
    })
}