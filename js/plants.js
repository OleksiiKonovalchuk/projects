const plants = [
	{ id: "1234", name: "Monstera Deliciosa Viriegatna", price: 750 },
	{ id: "1235", name: "Monster Karstaniaum", price: 750 },
	{ id: "1236", name: "Thai Constellation", price: 750 },
	{ id: "1237", name: "Monstera Adanson's", price: 750 },
	{ id: "1238", name: "Monstera Alba", price: 750 },
	{ id: "1239", name: "Philodendron Brasil", price: 150 },
	{ id: "1230", name: "Philodendron Birkin", price: 350 },
	{ id: "1232", name: "Tradescantia", price: 250 },
	{ id: "1231", name: "Caladium Strawberry Star", price: 750 },
	{ id: "1240", name: "Caladium Carlyn Whorton", price: 750 },
	{ id: "1241", name: "Caladium Red flash", price: 750 },
	{ id: "1242", name: "Caladium Rosebud", price: 750 },
	{ id: "1243", name: "Caladium Cherry Blossom", price: 750 },
	{ id: "1244", name: "Caladium White Christmas", price: 750 },
];
// const form = document.querySelector(".plants");
const list = document.querySelector(".list");
// const wrapper = document.querySelector(".wrapper");
// const submitBtn = document.querySelector(".submit-btn");
// const ourPlants = [];
const range = document.querySelector(".range");
const snippet = document.querySelector(".snippet");

// range.addEventListener("input", e => {
// 	const value = e.currentTarget.value;
// 	snippet.innerHTML = value;
// });
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
for (let i = 1; i <= 255; i++) {
	setTimeout(() => {
		snippet.innerHTML = i++;
		snippet.style.padding = `${i}px`;
		snippet.style.borderRadius = `${i}px`;
		snippet.style.fontSize = `${i}px`;
		snippet.style.color = getRandomHexColor();
		snippet.style.backgroundColor = getRandomHexColor();
	}, 300 * i);
}
// const arr = [
// 	{ snipet: "Snipet 1", id: 1 },
// 	{ snipet: "Snipet 2", id: 2 },
// 	{ snipet: "Snipet 3", id: 3 },
// 	{ snipet: "Snipet 4", id: 4 },
// ];

// const header = document.querySelector(".header");
// const addElem = arr.find(function (_, index, a) {
// 	return index === a.length - 1;
// });

// header.style.backgroundColor = "brown";
// header.insertAdjacentHTML("afterbegin", addElem.snipet);

// const onChange = (e, newInput, summ) => {
// 	if (!e.currentTarget.value) return;
// 	if (ourPlants.find(item => item.value === e.currentTarget.value && item.name === e.currentTarget.name)) return;

// 	console.log({ name: e.currentTarget.name, value: e.currentTarget.value });
// 	ourPlants.push({ name: e.currentTarget.name, value: e.currentTarget.value });
// 	if (e.currentTarget.value) newInput.setAttribute("disabled", true);
// 	summ.innerHTML = ` Sum: ${
// 		Number(e.currentTarget.value) * plants.find(item => item.name === e.currentTarget.name).price
// 	}`;
// };
// const plantCreator = ({ id, name, price }) => {
// 	return `
// 				<input class="plants_input" type="checkbox" name="${name}" id=${id} /><label class="plants_label" for=${id}>
//         <p class="plants_name">${name} with price <span class="plants_price">${price}</span></p></label>`;
// };
// // const elements = plants.map(item => plantCreator(item)).join(""); // variant 1
// const elements = plants.map(plantCreator).join(""); // variant 2
// form.insertAdjacentHTML("afterbegin", elements);

// form.addEventListener("click", e => {
// 	if (e.target.nodeName !== "INPUT") return;
// 	if (document.querySelector(`.input_${e.target.id}`)) return;
// 	list.insertAdjacentHTML(
// 		"beforeend",
// 		`<label>${e.target.name}<input class="input_${e.target.id} listInput" type="number" name="${e.target.name}"/><span class="span_${e.target.id}"></span></label>`,
// 	);

// 	const newInput = document.querySelector(`.input_${e.target.id}`);
// 	const summ = document.querySelector(`.span_${e.target.id}`);
// 	newInput.classList.add("withListener");
// 	newInput.addEventListener("focus", () => {
// 		newInput.addEventListener("blur", e => onChange(e, newInput, summ));
// 	});
// });

// submitBtn.addEventListener("click", () => {
// 	const summary = ourPlants.reduce((acc, item) => {
// 		return acc + item.value * plants.find(({ name }) => item.name === name).price;
// 	}, 0);
// 	list.innerHTML = "";
// 	wrapper.insertAdjacentHTML(
// 		"afterbegin",
// 		`<div class="modal__backdrop"><div class="modal"><h2 class="modal__header">Your order is placed</h2>
// 		<p class="modal__summary">Purchase summary is: <span class="modal__span">${summary}</span></p><button class="modal__close">Finish</button></div></div>`,
// 	);
// 	form.reset();
// 	document
// 		.querySelector(".modal__close")
// 		.addEventListener("click", () => document.querySelector(".modal__backdrop").classList.add("hidden"));
// });
