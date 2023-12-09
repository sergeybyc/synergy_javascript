const list = document.createElement("ol"); //создание h1
let task_2 = document.getElementById("task_2");

let data = [
	{ firstName: 'Igor', lastName: 'Naiduk' },
	{ firstName: 'Kirill', lastName: 'Shirokov' },
	{ firstName: 'Alexander', lastName: 'Denisov' },
	{ firstName: 'Stanislav', lastName: 'Vyazankin'}
	]
  
for (item of data) {
	// console.log(item)
	let li = document.createElement("li")
	li.textContent = `${item.firstName} ${item.lastName}`
	list.appendChild(li)
}
task_2.appendChild(list)

