const exec = require('child_process').exec;

exec('mongoimport -d gruming --drop -c words --jsonArray data/words.json', console.log);
