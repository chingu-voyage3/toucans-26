const firebase = require('../firebase/firebase');
//returns promise
exports.create = (refObj, dataObj) => firebase.database.ref(refObj).set(dataObj);
exports.push = (refObj, dataObj) => firebase.database.ref(refObj).push(dataObj);