var express = require('express');
var router = express.Router();
const flatdetailDBService = require('../database/FlatDetailDBService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Before calling Get flatdetail request :'+ JSON.stringify(req.body));
  //res.send('Respond for Get Tenant Request....');
  flatdetailDBService.getFlatdetail(res);
  console.log('After calling Get flatdetail:');
  
});

router.post('/', function (req, res) {
  console.log('Post flatdetail request :' + JSON.stringify(req.body));
  let flatdetailObject = req.body;
  console.log('FlatDetail Router - Before Calling FlatDetail DB Service - save Flatdetail');
  flatdetailDBService.saveFlatDetail(flatdetailObject);
  console.log('Flatdetail Router - After Calling FlatDetail DB Service - save Flatdetail');

  let { flatNumber: flatNumber, floorNumber: floorNumber } = req.body;
  res.send({ "floorNumber": floorNumber, "floorNumber": floorNumber, "flatDetailId": 001 });
})


router.put('/:flatDetailId', function (req, res) {
  console.log('Post flatdetail request :' + JSON.stringify(req.body));
  res.send('Got a PUT flatdetail request at /flatdetail')
})
router.delete('/:flatDetailId', function (req, res) {
  res.send('Got a Delete flatdetail request at /flatdetail')
})
module.exports = router;