const { fizzBuzz } = require("../fizzbuzz");

describe("fizzBuzz", () => {
	const tests = [
		{ input: 1, expected: 1 },
		{ input: 2, expected: 2 },
		{ input: 3, expected: "Fizz" },
		{ input: 4, expected: 4 },
		{ input: 5, expected: "Buzz" },
		{ input: 15, expected: "FizzBuzz" },
	];
	tests.map(({ input, expected }) => {
		const description = `${input} => ${expected}`;
		test(description, () => {
			expect(fizzBuzz(input)).toBe(expected);
		});
	});

	const testsError = [
		{ input: "string", expected: RangeError },
		{ input: -1, expected: RangeError },
		{ input: 0, expected: RangeError },
	];
	testsError.map(({ input, expected }) => {
		const description = `${input} => ${expected}`;
		test(description, () => {
			expect(() => fizzBuzz(input)).toThrow(expected);
		});
	});
});
