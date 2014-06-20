var config             = require('./server.config'),
    express            = require('express'),
    path               = require('path'),
    colors             = require('cli-color'),
    app                = express(),
    bodyParser         = require('body-parser'),
    mongoose           = require('mongoose'),
    featuresController = require('./controllers/features-controller');

mongoose.connect(config.mongodb.connection);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendfile(path.resolve(__dirname + "/../client/views/index.html"));
});

app.use('/js', express.static(path.resolve(__dirname + '/../client/js')));

////
// API
////
app.get('/api/features', featuresController.get);
app.post('/api/features', featuresController.create);

app.listen(config.web.port, function() {
    console.info(colors.green("Express listening on ") + colors.greenBright(":" + config.web.port));
});