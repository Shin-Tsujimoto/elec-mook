//function updateRecord() {
//	var elem = document.getElementById('update');
//	elem.innerText="・佐々木様から電話がありました";
//};

const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

function addList() {
	const list = document.createElement("p");
	list.innerText = "・佐々木様から電話がありました";
	lists.appendChild(list);
};

button.addEventListener("click", addList);