"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var routes_1 = require("./routes/routes");
var cors = require("@koa/cors");
var app = new Koa();
var koaOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};
app.use(routes_1.router.allowedMethods())
    .use(cors(koaOptions))
    .use(routes_1.router.routes());
app.listen(3000);
console.log('Server running on port 3000');
