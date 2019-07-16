"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var db_1 = require("../db/db");
var handler_error_1 = require("./handler-error");
var router = new Router();
exports.router = router;
router.use(function (ctx, next) { return next()
    .then(function (_) { return console.log('Success'); })
    .catch(function (err) { return console.error(err.stack); }); });
router.get('/allRooms', function (ctx) {
    return db_1.getAllRooms()
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
router.get('/allDeviceTypes', function (ctx) {
    return db_1.getAllDeviceTypes()
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
