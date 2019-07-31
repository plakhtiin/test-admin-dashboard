"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devices_db_1 = require("../db/devices-db");
var handler_error_1 = require("./handler-error");
var Router = require("koa-router");
var router = new Router();
exports.router = router;
router.get('/allDeviceTypes', function (ctx) {
    return devices_db_1.getAllDeviceTypes()
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
router.post('/device', function (ctx) {
    return devices_db_1.createNewDevice(ctx.request.body)
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
router.get('/device', function (ctx) {
    console.log(ctx.request.query);
    return devices_db_1.getDeviceById(ctx.request.query.deviceId)
        .then(function (row) {
        if (row) {
            return ctx.body = row;
        }
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
