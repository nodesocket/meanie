var config  = {};
config.web = {};
config.mongodb = {};

config.web.port = process.env.web_port || 3000;
config.mongodb.connection = process.env.mongodb_connection || 'mongodb://localhost:27017/features';

module.exports = config;