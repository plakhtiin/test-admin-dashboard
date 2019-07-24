"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var client = new pg_1.Client({
    user: 'ljfcticwoomtmp',
    host: 'ec2-54-221-212-126.compute-1.amazonaws.com',
    database: 'd73m8ie9s83ioe',
    password: '18a58c51f6d1c8753109b0cd80cc1fa82520706fee33cbcabe7aeb9cedaa80e9',
    port: 5432,
    ssl: true
});
exports.client = client;
client.connect()
    .then(function () {
    console.info('DB is connected');
})
    .catch(function (err) { return console.error(err); });
// client.query('SELECT t.* FROM public.lists t WHERE title=\'1\'', [])
//   .then((res) => {
//     console.info(res.rows) // Hello World!
//     client.end()
//   })
//   .catch((err) => console.error(err));
