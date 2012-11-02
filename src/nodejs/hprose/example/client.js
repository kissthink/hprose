var hprose = require("../hprose.js");

var HproseHttpClient = hprose.client.HproseHttpClient;
var client = new HproseHttpClient('http://127.0.0.1:8080/');
client.on('error', function(func, e) {
    console.log(func, e);
});
var proxy = client.useService();
var start = new Date().getTime();
var max = 10000;
var n = 0;
for (var i = 0; i < max; i++) {
    proxy.hello(i, function(result) {
        console.log(result);
        n++;
        if (n == max) {
            var end = new Date().getTime();
            console.log(end - start);
        }
    });
}
var end = new Date().getTime();
console.log(end - start);
