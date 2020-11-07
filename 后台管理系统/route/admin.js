const express = require("express");
const router = express.Router(); //实例化一个路由对象


//配置路由

//登录页面
router.get("/login", require("./admin-router/user-router/login.js"))
    //点击登录按钮提交表单，请求数据
router.post("/dologin", require("./admin-router/user-router/dologin.js"))
    //用户列表
router.get("/userlist", require("./admin-router/user-router/userlist.js"))
    //添加用户
router.get("/adduser", require("./admin-router/user-router/adduser.js"))
    //添加用户提交数据的地址
router.post("/doadduser", require("./admin-router/user-router/doadduser.js"))
    //删除数据
router.post("/deleteuser", require("./admin-router/user-router/deleteuser.js"))
    //修改用户
router.get("/edituser", require("./admin-router/user-router/edituser.js"))
    //点击确定修改按钮提交数据，更新数据库的接口
router.post("/doedituser", require("./admin-router/user-router/doedituser.js"))
    //用户搜索路由
router.get("/searchuser", require("./admin-router/user-router/searchuser.js"))

router.get("/logout", (req, res) => {
    req.session.destroy() //销毁session
    res.redirect("/admin/login")
})

//商品列表
router.get("/productlist", require("./admin-router/product-router/productlist.js"))
    //添加产品
router.get("/productadd", require("./admin-router/product-router/productadd.js"))
    //添加产品-提交数据
router.post("/doproductadd", require("./admin-router/product-router/doproductadd.js"))
    //修改产品
router.get("/productedit", require("./admin-router/product-router/productedit.js"))
    //修改产品-提交数据
router.post("/doproductedit", require("./admin-router/product-router/doproductedit.js"))
    //删除产品
router.post("/productdelete", require("./admin-router/product-router/productdelete.js"))
    //查询产品
router.get("/productsearch", require("./admin-router/product-router/productsearch.js"))


// 商品分类
router.get("/classifylist", require("./admin-router/classify-router/classifylist.js"))
    //添加产品分类
router.get("/classifyadd", require("./admin-router/classify-router/classifyadd.js"))
    //添加产品分类-提交数据
router.post("/doclassifyadd", require("./admin-router/classify-router/doclassifyadd.js"))
    //修改产品分类
router.get("/classifyedit", require("./admin-router/classify-router/classifyedit.js"))
    //修改产品分类-提交数据
router.post("/doclassifyedit", require("./admin-router/classify-router/doclassifyedit.js"))
    //删除产品分类
router.post("/classifydelete", require("./admin-router/classify-router/classifydelete.js"))
    //搜索商品分类
router.get("/classifysearch", require("./admin-router/classify-router/classifysearch.js"))
module.exports = router; //暴露