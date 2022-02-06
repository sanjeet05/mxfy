document.getElementById("dataListLeft").style.display = "none";
document.getElementById("dataListRight").style.display = "none";


// onchange of centre
function handleChangeCentreLeft(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListLeft").style.display = "none";
	document.getElementById("dataListLeft").style.display = "block";
}

// onchange of classroom
function handleChangeClassroomLeft(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListLeft").style.display = "none";
	document.getElementById("dataListLeft").style.display = "block";
}

// onchange of days
function handleChangeDaysLeft(event) {
	var value = event.target.dataset.value;
	console.log(value);

	document.getElementById("emptyListLeft").style.display = "none";
	document.getElementById("dataListLeft").style.display = "block";
	
}

// onchange of centre
function handleChangeCentreRight(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListRight").style.display = "none";
	document.getElementById("dataListRight").style.display = "block";
}

// onchange of classroom
function handleChangeClassroomRight(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListRight").style.display = "none";
	document.getElementById("dataListRight").style.display = "block";
}

// onchange of days
function handleChangeDaysRight(event) {
	var value = event.target.dataset.value;
	console.log(value);

	document.getElementById("emptyListRight").style.display = "none";
	document.getElementById("dataListRight").style.display = "block";
	
}

// for custom select options
for (const dropdown of document.querySelectorAll(".select_wrapper")) {
	dropdown.addEventListener("click", function () {
		this.querySelector(".select_container").classList.toggle("open");
	});
}

for (const option of document.querySelectorAll(".select_custom_option")) {
	option.addEventListener("click", function () {
		if (!this.classList.contains("selected")) {
			const selectedEle = this.parentNode.querySelector(
				".select_custom_option.selected"
			);
			if (selectedEle) {
				selectedEle.classList.remove("selected");
			}
			this.classList.add("selected");

			this.closest(".select_container")
				.querySelector(".select__trigger")
				.classList.add("selected");
			this.closest(".select_container").querySelector(
				".select__trigger span"
			).textContent = this.textContent;
		}
	});
}

document.addEventListener("click", function (e) {
	for (const select of document.querySelectorAll(".select_container")) {
		if (!select.contains(e.target)) {
			select.classList.remove("open");
		}
	}
});
