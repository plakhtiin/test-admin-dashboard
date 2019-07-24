"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
function getAllOperatingSystemsOptions() {
    return db_1.client.query('SELECT name as label, id as value FROM public.operating_systems t', [])
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
}
exports.getAllOperatingSystemsOptions = getAllOperatingSystemsOptions;
