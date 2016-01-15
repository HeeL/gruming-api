const exec = require('child_process').exec;

if (process.env.NODE_ENV == 'production') {
    exec(`mongoimport -d ${process.env.MONGODB_NAME} -u ${process.env.MONGODB_USER} -p ${process.env.PASS}
         -h ${process.env.HOST} --drop -c words --jsonArray data/words.json`, console.log);
}
else {
    exec(`mongoimport -d gruming --drop -c words --jsonArray data/words.json`, console.log);
}