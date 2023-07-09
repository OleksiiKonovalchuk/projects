const refs = {
	form: document.querySelector(".grid_grid"),
	inputPoint: document.querySelector('input[name="point"]'),
	inputShtroba: document.querySelector('input[name="shtroba"]'),
	inputBox: document.querySelector('input[name="boxWallplug"]'),
	span: document.querySelector(".span"),
	list: document.querySelector(".list"),
};
const { form, inputPoint, inputShtroba, inputBox, span, list } = refs;
function fn(psc, item) {
	return item === "point" ? 80 : item === "shtroba" ? 31 : 40 * psc;

	if (item === "point") {
		return 80 * psc;
	} else if (item === "shtroba") {
		return 31 * psc;
	} else {
		return 40 * psc;
	}

	// const price = item === "point" ? 80 : item === "shtroba" ? 31 : 40;
	// return price * pcs;
}
function stringening({ point, shtroba, boxWallplug }) {
	const [pointName, shtrobaName, boxName] = Object.keys(arguments[0]);
	console.log(arguments);
	return `<li><h2>Замовлення</h2>
<p>${pointName} <span class="span">${fn(point, pointName).toFixed(
		2,
	)} uah</span></p><p>${shtrobaName} <span class="span">${fn(shtroba, shtrobaName).toFixed(
		2,
	)} uah</span></p><p>${boxName} <span class="span">${fn(boxWallplug, boxName).toFixed(
		2,
	)} uah</span></p>	<p>Разом: <span class="span">${
		fn(boxWallplug, boxName) + fn(point, pointName) + fn(shtroba, shtrobaName)
	} uah</span></p></li>`;
}
refs.form.addEventListener("submit", e => {
	e.preventDefault();
	console.log("submited");
	console.log(`${inputPoint.name}`, inputPoint.value);
	console.log(`${inputShtroba.name}`, inputShtroba.value);
	console.log(`${inputBox.name}`, inputBox.value);
	console.log(list.children);
	const values = {
		[inputPoint.name]: inputPoint.value,
		[inputShtroba.name]: inputShtroba.value,
		[inputBox.name]: inputBox.value,
	};
	const str = stringening(values);
	// console.log(str);
	return list.insertAdjacentHTML("beforeend", str);
});
form.addEventListener("click", e => {
	console.log(e.target);
	if (e.target.nodeName !== "INPUT") return;
});
