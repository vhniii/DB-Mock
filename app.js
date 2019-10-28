const env = require('dotenv').config();
const express = require("express");
const Food = require('./models/Food');
const emulation = require('./conf.js');

const app = express();
app.use(express.json());


emulation();


app.get("/", (req, res) => {
  // res.json({ status: "success", message: "Welcome To Testing API" });
  Food.find().sort({date: -1}).then((food) => {
    res.json({status: 'success', food})
  });
});

app.post("/add", (req, res) => {
  // const { num1, num2 } = req.body;
  // const add = (num1, num2) => {
  //   return num1 + num2;
  // };
  // res.json({
  //   status: "success",
  //   result: "Welcome To Testing API",
  //   result: add(num1, num2)
  // });

  const newFood = new Food({
    name: req.body.name,
    price: req.body.price
  });

  newFood.save().then(food => res.json({
    status: "success",
    result: "Added food!"
  })
);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));

module.exports = app;