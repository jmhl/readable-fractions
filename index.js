function decimalToFraction(num) {
  // The decimal to convert
  let startx = num;
  // The maximum denominator
  let maxden = 10;

  // Create a matrix
  let matrix = [
    [1, 0],
    [0, 1]
  ];

  let x = num;
  let ai;
  let count = 0;

  while (matrix[1][0] * (ai = Math.round(x)) + matrix[1][1] <= maxden) {
    count++;
    if (count > 50) break;

    let term = matrix[0][0] * ai + matrix[0][1];
    matrix[0][1] = matrix[0][0];
    matrix[0][0] = term;
    term = matrix[1][0] * ai + matrix[1][1];
    matrix[1][1] = matrix[1][0];
    matrix[1][0] = term;

    // Don't divide by zero
    if (startx === ai) break;
    x = 1 / Math.abs(x - ai);
  }

  let numerator = matrix[0][0];
  let denominator = matrix[1][0];
  let error = startx - (matrix[0][0] / matrix[1][0]);
  console.log(numerator, denominator, error);

  return `${numerator}/${denominator}`;
}

// console.log(decimalToFraction(0.33333));
// console.log(decimalToFraction(0.125));
console.log(decimalToFraction(0.66));
// console.log(decimalToFraction(0.1875));

// #include <stdio.h>
//
// main(ac, av)
//   int ac;
//   char ** av;
// {
//   long m[2][2];
//   double x, startx;
//   long maxden;
//   long ai;
//
//   startx = x = atof(av[1]);
//   maxden = atoi(av[2]);
//
//   /* initialize matrix */
//   m[0][0] = m[1][1] = 1;
//   m[0][1] = m[1][0] = 0;
//
//   /* loop finding terms until denom gets too big */
//   while (m[1][0] *  ( ai = (long)x ) + m[1][1] <= maxden) {
//     long t;
//     t = m[0][0] * ai + m[0][1];
//     m[0][1] = m[0][0];
//     m[0][0] = t;
//     t = m[1][0] * ai + m[1][1];
//     m[1][1] = m[1][0];
//     m[1][0] = t;
//     if(x==(double)ai) break;     // AF: division by zero
//     x = 1/(x - (double) ai);
//     if(x>(double)0x7FFFFFFF) break;  // AF: representation failure
//   }
//
//   /* now remaining x is between 0 and 1/ai */
//   /* approx as either 0 or 1/m where m is max that will fit in maxden */
//   /* first try zero */
//   printf("%ld/%ld, error = %e\n", m[0][0], m[1][0],
//       startx - ((double) m[0][0] / (double) m[1][0]));
//
//   /* now try other possibility */
//   ai = (maxden - m[1][1]) / m[1][0];
//   m[0][0] = m[0][0] * ai + m[0][1];
//   m[1][0] = m[1][0] * ai + m[1][1];
//   printf("%ld/%ld, error = %e\n", m[0][0], m[1][0],
//       startx - ((double) m[0][0] / (double) m[1][0]));
// }
