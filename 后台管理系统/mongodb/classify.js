const mongoose = require("mongoose");
require("./database")
    //创建一个用户集合规则
const ClassifySchema = new mongoose.Schema({
    producttype: { //商品类别
        type: String, //类型
        required: [true, "商品类别不能为空"], //开启验证
        trim: true //去除空格
    },
    product: { //包含产品
        type: String
    },
    inventory: { //库存数量
        type: Number
    }
})

//使用集合规则创建集合
const Classify = mongoose.model('Classify', ClassifySchema);

//暴露
module.exports = {
    Classify
}