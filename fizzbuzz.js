const fizzBuzz = (num) => {
	if (isInvalid(num)) throw new RangeError("引数が不正");
	if (num % 15 === 0) return "FizzBuzz";
	else if (num % 3 === 0) return "Fizz";
	else if (num % 5 === 0) return "Buzz";
	else return num;
};

const isInvalid = (num) => {
	if (typeof num !== "number") return true;
	if (Math.round(num) !== num) return true;
	if (num < 1) return true;

	return false;
};

module.exports = { fizzBuzz };
