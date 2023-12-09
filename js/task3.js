let task_3 = document.getElementById('task_3')
const div_task_3 = document.createElement("div");
div_task_3.setAttribute('id', 'figura')

task_3.appendChild(div_task_3)

figura = document.getElementById('figura')
figura.style.height = '50px';
figura.style.width = '50px';
figura.style.background = 'red';
figura.style.transition = 'border-radius .3s linear'

let form = 0;
function changeForm() {
	
	if (form == 0) {
		figura.style.borderRadius = '50px';
		form = 1;
	} else {
		figura.style.borderRadius = '0px';
		form = 0;
	}
}