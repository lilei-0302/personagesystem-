const { Product } = require("../../../mongodb/product.js")
module.exports = async(req, res) => {
    console.log(req.body.id);
    let result = await Product.findOneAndDelete({ "_id": req.body.id })
    console.log(result);
    if (result) {
        res.redirect("/admin/productlist")
    }
}