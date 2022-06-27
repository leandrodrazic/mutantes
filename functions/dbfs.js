

var admin = require("firebase-admin");
//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


var serviceAccount = require("./mutantes-leandro-firebase-adminsdk-rmkze-397d362813.json");

const FS = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const dbFS = FS.firestore()


module.exports.dbFS = dbFS;