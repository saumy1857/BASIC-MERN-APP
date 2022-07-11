const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    jwtSecret: 'swaggy_secret_key_forapi',
    mongodburi: 'mongodb://' + DB_USERNAME + ':' + DB_PASSWORD + '@ds233763.mlab.com:33763/basic-mern-stack-app'
};