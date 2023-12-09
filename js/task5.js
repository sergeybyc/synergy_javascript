let task_5 = document.getElementById('task_5')
const task_5_create_input = document.createElement("input")
task_5_create_input.setAttribute("id", "task_5_input")
task_5.appendChild(task_5_create_input)
let task_5_input = document.getElementById("task_5_input")
task_5_input.setAttribute("placeholder", "Введите текст")

const task_5_create_button = document.createElement("button")
task_5_create_button.setAttribute("id", "task_5_button")
task_5_create_button.setAttribute("type", "text")

task_5.appendChild(task_5_create_button)
let task_5_button = document.getElementById("task_5_button")
task_5_button.onmousedown = function () {task_5_button.style.background = "#f3f3f3";}
task_5_button.onmouseup = function () {task_5_button.style.background = "#fff";}
// task_5_button.onmouseup = mouseUp('save')

task_5_button.textContent = "Сохранить";
task_5_button.setAttribute("onclick", "saveText(storage)")

let storage = []

function saveText(storage) {
	// storage.push(`{"text:" "${task_5_input.value}"}`);
	// storage.text = task_5_input.value
	if (task_5_input.value) {
		obj = []
		obj.text = task_5_input.value
		storage.push(obj)
		task_5_input.value = '';
		task_5_input.setAttribute("placeholder", "Текст сохранен!")
		setTimeout(function () {
			console.log(storage);
			task_5_input.setAttribute("placeholder", "Введите текст")
		},2000);
		} else {
			task_5_input.setAttribute("placeholder", "Заполните поле!")
			setTimeout(function () {
				task_5_input.setAttribute("placeholder", "Введите текст")
			}, 1000)
		}
}

