var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/**
 * TenantDB Service - saveTenant method to save the tenant object in Mongo DB.
 * @param {*} tenantObject  - Tenant Json from Express router.
 */
exports.saveTenant = (tenantObject) => {

    console.log('TenantDBService - saveTenant');
    console.log(tenantObject);
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tenantdb");

    //dbo.collection(<TABLE_NAME>).insertOne ( Object )
    dbo.collection("tenant").insertOne(tenantObject, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //Close the db after insertion.
        db.close();
    });
    });
}

exports.getTenant = (responseCallback) => {

    console.log('TenantDBService - getTenant');
    MongoClient.connect(url, function (err, db) {
      if (err) {
        handleError(err, responseCallback, ERROR_001);
      } else {
        var dbo = db.db("tenantdb");
  
        //dbo.collection(<TABLE_NAME>).insertOne ( Object )
        dbo.collection("tenant").find({}).toArray(function (err, result) {
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
