const firebase = require('firebase/app');
const database = require('firebase/database');
const storage = require('firebase/storage');

firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID
});

const fb = {};

//sigleton
fb.database = firebase.database();
fb.storage = firebase.storage();

module.exports = {
    getFirebaseConn: (req, res, next) => {
        req.firebase = fb;
        next();
    }
};