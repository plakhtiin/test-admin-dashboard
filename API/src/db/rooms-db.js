"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
function getAllRoomsOptions() {
    return db_1.client.query('SELECT room_id as value, room_name as label FROM public.rooms t', [])
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
}
exports.getAllRoomsOptions = getAllRoomsOptions;
