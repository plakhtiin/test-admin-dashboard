"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var rooms_db_1 = require("../db/rooms-db");
var handler_error_1 = require("./handler-error");
var router = new Router();
exports.router = router;
router.use(function (ctx, next) { return next()
    .catch(function (err) { return console.error(err.stack); }); });
router.get('/allRooms', function (ctx) {
    return rooms_db_1.getAllRoomsOptions()
        .then(function (rows) {
        return ctx.body = rows;
    })
        .catch(function (err) {
        return handler_error_1.handlerError(err);
    });
});
