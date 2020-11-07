const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const session = require("express-session")

const app = new express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"));

//使用body-parser
app.use(bodyParser.urlencoded({
    extended: false //不扩展
}))
app.use(bodyParser.json())

//配置session
app.use(session({
    secret: 'dsjjfjkjsljsjfwewom',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000 //设置过期时间
    },
    rolling: true //强制将cookie的过期时间重置
}))

//判断登录状态
app.use((req, res, next) => {
    if (req.url != "/admin/login" && req.url != "/admin/dologin" && !req.session.username) {
        res.redirect("/admin/login")
    } else {
        next()
    }

})

console.log(bodyParser);
//引入自定义的路由模块
const admin = require("./route/admin.js")
    //配置一个URL
app.use("/admin", admin)

app.listen(3000, () => {
    console.log("3000running");
})