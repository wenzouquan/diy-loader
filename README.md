# diy-loader
自定义webpack loader


# 本地安装
npm install diy-loader --save


# 配置
在网站根目录添加 diy-loader.js文件（与node_modules同一级目录）

# 用法
let A = require("diy-loader?methods=ejs|react!./a.ejs").default;

methods参数，多个函数用"|"， 这样就会调用diy-loader.js文件定义好的函数

# 示例
a.ejs 的代码

<%- include('__ROOT__/b.js', {name: 'wenb'}) %>
const A = () => {
	console.log('wen190');
}
export default A


b.js 的代码

const B = () => {
	console.log('<%= name %>');
}

let A = require("diy-loader?methods=ejs|react!./a.ejs").default;

和以下代码实现相同的效果
c.js 

const B = () => {
	console.log('wenb');
}

const A = () => {
	console.log('wen190');
}
export default A


let A = require("c.js").default;

更方法自己可以在diy-loader添加





