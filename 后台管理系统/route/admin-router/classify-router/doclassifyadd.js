//按需引入db暴露的模块
const { Classify } = require("../../../mongodb/classify")
const md5 = require("md5");
module.exports = async(req, res) => {
    console.log(req.body);
    let producttype1 = await Classify.findOne({ producttype: req.body.producttype })

    if (!producttype1) {
        let classifyInfo = {
            producttype: req.body.producttype,
            product: req.body.product,
            inventory: req.body.inventory
        }
        let result = await Classify.create(classifyInfo)
        if (result) {
            res.redirect("/admin/classifylist")
        }
    } else {
        console.log("商品类型重复");
    }

}