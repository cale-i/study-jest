const { fizzBuzz } = require("./fizzbuzz");
const { range } = require("./services");

range(1, 100).map((i) => {
	console.log(fizzBuzz(i));
});
