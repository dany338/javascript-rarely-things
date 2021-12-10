const q1 = true + false;
console.log(`q1: ${q1}`); // q1: 1

const q2 = [,,,].length;
console.log(`q2: ${q2}`); // q2: 3

const q3 = [1, 2, 3] + [4, 5, 6];
console.log(`q3: ${q3}`); // q3: 1,2,34,5,6

const q4 =  0.2 + 0.1 === 0.3;
console.log(`q4: ${q4}`); // q4: false

const q5 = `10,2`;
console.log(`q5: ${q5}`); // q5: 2

const q6 = !!"";
console.log(`q6: ${q6}`); // q6: true

const q7 = +!![];
console.log(`q7: ${q7}`); // q7: 1

const q8 = !!!true;
console.log(`q8: ${q8}`); // q8: false

const q9 = true == "true";
console.log(`q9: ${q9}`); // q9: false

const q10 = 010 - 03;
console.log(`q10: ${q10}`); // q10: 5

const q11 = "" - - "";
console.log(`q11: ${q11}`); // q11: 0

const q12 = null + 0;
console.log(`q12: ${q12}`); // q12: 0

const q13 = 0/0;
console.log(`q13: ${q13}`); // q13: NaN

const q14 = 1/0 > Math.pow(10, 1000);
console.log(`q14: ${q14}`); // q14: flase

const q15 =true++;
console.log(`q15: ${q15}`); // q15: SyntaxError

const q16 = "" - 1;
console.log(`q16: ${q16}`); // q16: -1

const q17 = (null - 0) + "0";
console.log(`q17: ${q17}`); // q17: 00

const q18 = true + ("true"- 0);
console.log(`q18: ${q18}`); // q18: NaN

const q19 = !5 + !5;
console.log(`q19: ${q19}`); // q19: 0

const q20 = [] + [];
console.log(`q20: ${q20}`); // q20: ""

const q21 = NaN === NaN;
console.log(`q21: ${q21}`); // q21: false

const q22 = NaN++;
console.log(`q22: ${q22}`); // q22: NaN

const q23 = undefined + false;
console.log(`q23: ${q23}`); // q23: NaN

const q24 = +0 === -0;
console.log(`q23: ${q24}`); // q24: true

const q25 = - "" + + "1" * null - [,];
console.log(`q25: ${q25}`); // q25: 0



