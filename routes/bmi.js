const express = require("express");
const router = express.Router();
router.use(express.urlencoded({extended: true}));


router.get('/', (req, res) => {
  res.render('bmi');
})

router.post('/', (req, res) => {
  console.log(req.body);
  let age = req.body.age;
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let heightInM = height/100;
  let result = weight/Math.pow(heightInM, 2);
  let bmi = result.toFixed(1);
  res.render('bmi', { age: age, weight: weight, height: height, bmi: bmi});
})

module.exports = router;