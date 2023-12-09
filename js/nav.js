let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let taskTitle = document.getElementById('title')
let total = 4;
let now = 0;
let direction = 'next';


// счетчик
function prevSlide() {
	 if (now >= 1) {
	 	now--
	}
	Slider(now)
	return now;
}
function nextSlide() {
	 direction = 'next'
	 if (now >= 0 && now <= 4) { 
	 	now++
	 }
	
	Slider(now)
	return now;
}
// cкрыть
function navHiderHide(...a) {
	for (dkf of a) {
		dkf.classList.add('hidenav', 'im_hidden');
		dkf.classList.remove('clicked');
		dkf.addEventListener('transitionend',
		function(e) {
			dkf.classList.add('display_none');
			dkf.classList.remove('im_showed', 'shownav');
		    }, {
				capture: false,
				once: true,
				passive: false
		    });}
}
// Показать
function navHiderShow(...a) {

	for (dwk of a) {
		dwk.classList.add('im_showed','clicked')
		dwk.classList.remove('hidenav','im_hidden');

		setTimeout(function () {
		dwk.classList.remove('display_none');
		}, 20);}
}

// transform -100 / 100
function prev(...task) {
	for (o of task) {
		o.classList.add('prev')
		o.classList.remove('next')
	}
}
function next(...task) {
	for (o of task) {
		o.classList.add('next')
		o.classList.remove('prev')
	}
}

function Slider(now, direction) {
	switch (now) {

		case 0:
			prev(task_1)
			next(task_2)
			navHiderHide(prevButton, task_2)
			navHiderShow(task_1)
			taskTitle.innerHTML = "Задание 1"
			break;
		case 1:
			prev(task_2)
			next(task_3)
			navHiderHide(task_1, task_3)
			navHiderShow(nextButton, prevButton, task_2)
			taskTitle.innerHTML = "Задание 2"
			break;
		case 2:
			prev(task_3)
			next(task_4)
			navHiderHide(task_2, task_4)
			navHiderShow(task_3)
			taskTitle.innerHTML = "Задание 3"
			break;
		case 3:
			prev(task_4)
			next(task_5)
			navHiderHide(task_1, task_2, task_3, task_5)
			navHiderShow(task_4,nextButton)
			taskTitle.innerHTML = "Задание 4"
			break;
		case 4:
			prev(task_5)
			navHiderHide(nextButton, task_1, task_2, task_3, task_4)
			navHiderShow(task_5)
			taskTitle.innerHTML = "Задание 5"
			break;
	}
}

document.getElementById("sign").innerHTML = '02 декабря 2023. Итоговое домашнее задание JavaScript.';




// Покраска кнопок при нажатии
function colorizeOff(j) {
	if (j == 'prev') {
 		document.getElementById(j).style.background = "white";
 		document.getElementById(j).style.transform = "translateY(0%)";
	}
	if (j == 'next') {
 		document.getElementById(j).style.background = "white";
 		document.getElementById(j).style.transform = "translateY(0)";
 		document.getElementById(j).style.width = "70px";
	}
}
function colorizeOn(j) {
	if (j == 'prev') {
 		document.getElementById(j).style.background = "#f3f3f3";
 		document.getElementById(j).style.transform = "translateY(5%)";
	}
	if (j == 'next') {
 		document.getElementById(j).style.background = "#f3f3f3";
 		document.getElementById(j).style.transform = "translateY(5%)";
	}
}

Slider(now)
