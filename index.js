const http = require('http');
const Router = require('router')
const fs = require('fs');
var finalhandler = require('finalhandler') // for error
const router = Router()
router.get('/assets', function (req, res) {
    // res.setHeader('Content-Type', 'application/json; charset=utf-8')
    fs.readdir('./assets', function (err, data) {
        res.end(JSON.stringify(data));
    });
});
router.get('/assets/:x', function (req, res) {
    fs.readFile(`./assets/${req.params.x}`, function (err, data) {
        res.end(data);
    });
});
const server = http.createServer((req, res) => {
    router(req, res, finalhandler(req, res));
})

server.listen(3005);

