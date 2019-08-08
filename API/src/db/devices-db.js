"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
function getAllDeviceTypes() {
    return db_1.client.query('SELECT id, title FROM public.device_types t', [])
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
}
exports.getAllDeviceTypes = getAllDeviceTypes;
function createNewDevice(newDevice) {
    return db_1.client.query('INSERT INTO public.devices (title, device_type, os_type, room_id) VALUES($1, $2, $3, $4) RETURNING *', [newDevice.title, newDevice.device_type, newDevice.os_type, newDevice.room_id])
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
}
exports.createNewDevice = createNewDevice;
function getDeviceById(deviceId) {
    return db_1.client.query('SELECT * FROM public.devices t WHERE id = $1', [deviceId])
        .then(function (res) {
        return res.rows[0];
    })
        .catch(function (err) {
        console.error('error', err);
        return err;
    });
}
exports.getDeviceById = getDeviceById;
function getDevices() {
    return db_1.client.query('SELECT * FROM get_devices()')
        .then(function (res) {
        return res.rows;
    })
        .catch(function (err) {
        console.error('error', err);
        return err;
    });
}
exports.getDevices = getDevices;
