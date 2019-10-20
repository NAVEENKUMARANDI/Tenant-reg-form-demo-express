var express = require('express');
var router = express.Router();
const EBMeterDetailDBService = require('../database/EBMeterDetailDBService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Before calling Get ebmeterdetail request :'+ JSON.stringify(req.body));
  //res.send('Respond for Get EBmeterdetail Request....');
  EBMeterDetailDBService.getEBMeterDetail(res);
  console.log('After calling Get ebmeterdetail:');
  
});

router.post('/', function (req, res) {
  console.log('Post ebmeterdetail request :' + JSON.stringify(req.body));
  let ebmeterdetailObject = req.body;
  console.log('EBmeterdetail Router - Before Calling EBmeterdetail DB Service - save EBmeterdetail');
  EBMeterDetailDBService.saveEBMeterDetail(ebmeterdetailObject);
  console.log('EBMeterDetail Router - After Calling EBMeterDetail DB Service - save EBMeterDetail');

  let { meterID: meterID, month: month } = req.body;
  res.send({ "meterID": meterID, "month": month, "meterID": 001 });
})


router.put('/:meterID', function (req, res) {
  console.log('Post EBmeterdetail request :' + JSON.stringify(req.body));
  res.send('Got a PUT EBmeterdetail request at /EBmeterdetail')
})
router.delete('/:meterID', function (req, res) {
  res.send('Got a Delete EBmeterdetail request at /EBmeterdetail')
})
module.exports = router;