(function () {
	const lengthPasswordInput = document.querySelector(".password__length");
	const lengthPasswordOutput = document.querySelector(".password__length-value");
	const lengthPassword = lengthPasswordInput.value;


	lengthPasswordInput.oninput = function() {
		lengthPasswordOutput.innerHTML = this.value;
	}

	// lengthPasswordOutput.innerHTML = lengthPassword;
	// lengthPasswordInput.addEventListener("input", (event) => {
	// 	lengthPasswordOutput.innerHTML = lengthPassword;
	// });
	//
	// console.log(lengthPassword)
	// lengthPasswordInput.addEventListener("input", );
})();