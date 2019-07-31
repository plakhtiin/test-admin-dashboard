"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
function getAllRooms() {
    return db_1.client.query('SELECT id, name, icon FROM public.rooms t', [])
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
}
exports.getAllRooms = getAllRooms;
