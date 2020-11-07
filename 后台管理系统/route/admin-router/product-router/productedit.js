const { Product } = require("../../../mongodb/product.js")
module.exports = async(req, res) => {
    console.log(req.query);
    let result = await Product.findOne({ "_id": req.query.id })
    res.render("./admin/product/productedit.ejs", {
        lists: result
    })
}