const helloworld = document.createElement("h1"); //создание h1
const helloworld_crosshair = document.createElement("span");
let task_1 = document.getElementById("task_1");


helloworld.setAttribute(`id`, `helloworld`)
helloworld_crosshair.setAttribute(`id`, `crosshair`)


task_1.appendChild(helloworld);
task_1.appendChild(helloworld_crosshair);

let txt1 = "Hello World!";
let txt5 = "Hello World! JSD asdas";
let ii = 0;
let speed2 = 150;
let speed3 = 150;
let crosshair = '|';

//добавление текста
function typeWriter1() {
	if (ii < txt1.length) {
		document.getElementById("helloworld").innerHTML += txt1.charAt(ii); 
		ii++;
		setTimeout(typeWriter1, speed2);
	} 
	
	if (ii == txt1.length) {
		document.getElementById("crosshair").style.animation = "blinker 1s step-start infinite";
	}
}

typeWriter1()

// function erase(ii) {
// 	console.log(`ii = ${ii}`)
// 	if (ii > 3 && ii != 0) {
// 		console.log('eraser')
// 		document.getElementById("helloworld").innerHTML = helloworld.innerHTML.slice(0, -1);
// 		console.log(ii)
// 		ii--;
// 		setTimeout(erase, speed2, ii);
// 	}
// }
