var express = require('express');
var router = express.Router();

var topics;


/*
try {
  const kafka = new Kafka({
    clientId: "monitoring1",
    brokers: ["192.168.1.38:9092"]
  });

  const admin = kafka.admin()
  console.log("Kafka Broker'a bağlanılıyor...");

  await admin.connect()
  console.log("Kafka Broker'a bağlantı başarılı.");

  topics = await admin.listTopics();

  await admin.disconnect()
  console.log("Kafka Broker'a bağlantı koparıldı.");


} catch (error) {
  console.log("Bir Hata Oluştu", error);
} finally {
  //process.exit(0);
}

*/



/* GET home page. */
router.get('/', function (req, res, next) {
  //req.topsss = topics;
  res.render('index', { title: "Express", asd: "asd1" });
});

module.exports = router;
