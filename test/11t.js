// node 11t.js
// < --------------Question 11----------------->

// What is the output ?
// A: 4 5 6 -> ans
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 

const add = function (x) {
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

add(4);

