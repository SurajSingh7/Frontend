// node 2test.js
// < --------------Question 2----------------->
// What is the output ?
// A: my@email.com
// B: new@email.com ==> ans
// C: undefined
// D: ReferenceError
const user = {
	email: "my@email.com",
	updateEmail: function (email){
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)


