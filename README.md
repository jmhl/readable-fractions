# Human Readable Fractions
A small library to convert decimals to human readable fractions. Since the fractions are human readable, it means that they are *not* precise. The maximum denominator (right now) is 10. Also contains a function to convert fractions to decimals.

## Info
+ A JavaScript implementation of: [http://www.ics.uci.edu/~eppstein/numth/frap.c](http://www.ics.uci.edu/~eppstein/numth/frap.c)
+ Via: [http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions](http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions)
+ Ruby gem implemenation: [https://github.com/clord/fraction](https://github.com/clord/fraction)
+ More info: [https://en.wikipedia.org/wiki/Continued_fraction](https://en.wikipedia.org/wiki/Continued_fraction)

## API
+ [formatReadableFractionlink](#f1)
+ [fractionToDecimal](#f2)
+ [toReadableFraction](#f3)

#### <a name="f1">formatReadableFraction

Formats the readable fraction object as a string.

 * @param {Object} fraction - The fraction object to convert to a string. It's recommended to use the result of toReadableFraction, but any array with the format of [numerator, denominator] is allowed.
 * @param {Boolean} isImproper (optional) - If true, will return an improper fraction if the fraction object has a numerator greater than its denominator.
@returns {String} The fraction object in string format.

Usage:

```
let fractionObject = {
  denominator: 3,
  error: -3.3333333332441484e-7,
  numerator: 1
};
let result = formatReadableFraction(fractionObject);
console.log(result);
// '1/3'
```
```
let fractionObject = {
  denominator: 5,
  error: -0.012500000000000178,
  numerator: 11
};
let result = formatReadableFraction(fractionObject);
console.log(result);
// '2 1/5'
```
```
let fractionObject = {
  denominator: 5,
  error: -0.012500000000000178,
  numerator: 11
};
let result = formatReadableFraction(fractionObject);
console.log(result);
// '11/5'
```


#### <a name="f2">fractionToDecimal

Converts a fraction to a decimal. Unlike toReadableFraction, this is precise.

* @param {String} fraction - The fraction (as a string) to convert.
* @returns {Number} The converted fraction in decimal notation.

Usage:

```
let fraction = '1/4';
let result = fractionToDecimal(fraction);
console.log(result);
// 0.25
```
```
let fraction = '2 1/4';
let result = fractionToDecimal(fraction);
console.log(result);
// 2.25
```


#### <a name="f3">toReadableFraction

Converts a decimal to a human readable fraction with a maximum denominator of 10. This means that the result is NOT precise.

 * @param {Number} decimal - The decimal number to convert.
 * @param {Boolean} shouldFormat (optional) - If true then the function will return a string instead of the fraction object.
 * @returns {Object|String} A fraction object with keys: denominator, error, numerator; OR a formatted fraction string (This will always return a result with a proper fraction so if the decimal is greater than 1 then the resultwill never be improper (e.g. 12/5). To retrieve an improper fraction, call formatReadableFraction on the result of toReadableFraction.

Usage:

```
let decimal = 0.333333;
let result = toReadableFraction(decimal);
console.log(result);
// { denominator: 3, error: -3.3333333332441484e-7, numerator: 1 }
```
```
let decimal = 0.125;
let result = toReadableFraction(decimal, true);
console.log(result); // '1/8'
```

### Contributing
Add the git post-commit hook

## License
MIT
