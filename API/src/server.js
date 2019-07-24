"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var Router = require("koa-router");
var rooms_1 = require("./routes/rooms");
var devices_1 = require("./routes/devices");
var operating_systems_1 = require("./routes/operating-systems");
var cors = require("@koa/cors");
var bodyParser = require("koa-bodyparser");
var app = new Koa();
var koaOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};
var router = new Router();
app
    .use(bodyParser())
    .use(router.allowedMethods())
    .use(cors(koaOptions))
    .use(rooms_1.router.routes())
    .use(operating_systems_1.router.routes())
    .use(devices_1.router.routes());
app.listen(3000);
console.log('Server running on port 3000');
