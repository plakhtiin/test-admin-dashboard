"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var Router = require("koa-router");
var app = new Koa();
var router = new Router();
// router.get('/*', (ctx) => {
// 	ctx.body = 'Hello World!';
// });
app.use(router.routes());
app.listen(3000);
console.log('Server running on port 3000');
