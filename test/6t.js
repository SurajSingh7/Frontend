// node 6t.js
// < --------------Question 6----------------->
// for this ques read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// A: 2 4 and 3 6 and 3 34  -> ans
// B: 2 NaN and 3 NaN
// C: 2 Error and 3 6
// D: 2 4 and 3 Error

const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
myFunc(3,34);

