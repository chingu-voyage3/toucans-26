/**
 * This file contains all firebase DB related operations.
 */

//returns promise
module.exports = {
    create : (conn, refObj, dataObj) => conn.database.ref(refObj).set(dataObj),
    read : (conn, refObj) => conn.database.ref(refObj).once('value'),
    readLast : (conn, refObj, n) => conn.database.ref(refObj).limitToLast(4).once('value'),
    push : (conn, refObj, dataObj) => conn.database.ref(refObj).push(dataObj),
    remove : (conn, refObj) => conn.database.ref(refObj).remove(),
    upload : (conn, filePath, file) => conn.storage.ref(filePath).put(file)
}

