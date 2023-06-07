const u1 = document.querySelector("#username");
const u2 = document.querySelector("#username2");
const message = document.querySelector("#formmessage");

u2.addEventListener("focusout", checkSame);

// This should be refactored.

// This should be refactored.
function checkSame() {
	if (u1.value !== u2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		u2.style.backgroundColor = "#fff0f3";
		u2.value = "";
		u2.focus();
	}
	else{
		message.style.display = "none";
		u2.style.backgroundColor = "#fff";
		u2.style.color = "#000";
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
	rangevalue.innerHTML = range.value;
}