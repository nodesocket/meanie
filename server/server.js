var config = require('./server.config')
    express = require('express')
    path = require('path')
    colors = require('cli-color')
    app = express()

app.get('/', function(req, res) {
    res.sendfile(path.resolve(__dirname + "/../client/views/index.html"));
});

app.use('/js', express.static(path.resolve(__dirname + '/../client/js')));

app.listen(config.web.port, function() {
    console.info(colors.green("Express listening on ") + colors.greenBright(":" + config.web.port));
});