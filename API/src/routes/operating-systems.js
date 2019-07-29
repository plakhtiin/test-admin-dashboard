"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var handler_error_1 = require("./handler-error");
var operating_systems_1 = require("../db/operating-systems");
var router = new Router();
exports.router = router;
router.get('/allOperatingSystems', function (ctx) {
    return operating_systems_1.getAllOperatingSystems()
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
