const passwordOutput = document.querySelector("password__output");
const lengthPasswordInput = document.querySelector(".password__length");
const lengthPasswordOutput = document.querySelector(".password__length-value");

lengthPasswordOutput.innerHTML = 20;
let lengthPassword = 0;

function getLengthPassword() {
lengthPasswordOutput.innerHTML = lengthPasswordInput.value;
lengthPassword = lengthPasswordInput.value;
renderPassword();
}
// passwordOutput.innerHTML = "123"

function renderPassword() {
	console.log(lengthPassword)
}



lengthPasswordInput.addEventListener('input', getLengthPassword)

getLengthPassword()
renderPassword()
// lengthPasswordInput.addEventListener('input', function() {
// 	const numbers = '1234567890'
// 	let random = Math.floor(Math.random() * numbers.length)
// 	lengthPasswordOutput.innerHTML = lengthPasswordInput.value;
// 	lengthPassword = lengthPasswordInput.value;
// 	let result = '';
// 	for(let i = 0; i < lengthPassword; i += 1) {
// 		result += numbers[random]
// 	}
// 	console.log(typeof result);
// 	passwordOutput.innerHTML = 'gjh';
// })
