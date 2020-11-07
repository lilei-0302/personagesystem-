const { Classify } = require("../../../mongodb/classify.js")

module.exports = async(req, res) => {
    console.log(req.body);
    console.log(req.query.id);
    let result = await Classify.updateOne({ "_id": req.query.id }, {
        producttype: req.body.producttype,
        product: req.body.product,
        inventory: req.body.inventory
    })
    console.log(result);
    if (result) {
        res.redirect("/admin/classifylist")
    }
}