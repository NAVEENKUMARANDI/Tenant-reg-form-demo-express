var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/**
 * TenantDB Service - saveTenant method to save the tenant object in Mongo DB.
 * @param {*} flatdetailObject  - Tenant Json from Express router.
 */
exports.saveFlatDetail = (flatdetailObject) => {

    console.log('FlatDetailDBService - saveFlatDetail');
    console.log(flatdetailObject);
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tenantdb");

    //dbo.collection(<TABLE_NAME>).insertOne ( Object )
    dbo.collection("flatdetail").insertOne(flatdetailObject, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //Close the db after insertion.
        db.close();
    });
    });
}

exports.getFlatdetail = (responseCallback) => {

    console.log('FlatDetailDBService - getFlatdetail');
    MongoClient.connect(url, function (err, db) {
      if (err) {
        handleError(err, responseCallback, ERROR_001);
      } else {
        var dbo = db.db("tenantdb");
  
        //dbo.collection(<TABLE_NAME>).insertOne ( Object )
        dbo.collection("flatdetail").find({}).toArray(function (err, result) {
          if (err) {
            handleError(err, responseCallback, ERROR_001);
          } else {
            responseCallback.send(result);
          }
          db.close();
        });
      }
    });
  }
