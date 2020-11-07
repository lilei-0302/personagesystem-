const { Classify } = require("../../../mongodb/classify.js")
module.exports = async(req, res) => {
    console.log(req.query);
    let result = await Classify.findOne({ "_id": req.query.id })
    res.render("./admin/classify/classifyedit.ejs", {
        lists: result
    })
}