let task_4 = document.getElementById('task_4');
let calcname = document.getElementById('calcname');
calcname.innerHTML = 'Калькулятор'

class Calculator {
    constructor(a, operation, b, num) {
    	this.a = a;
    	this.operation = operation;
    	this.b = b;
    	this.num = num;
    }
	
    printing(a, operation, b) {
    		ondisp = document.getElementById('display').innerHTML
	    	if (z) {
	    		this.clearDisplay();
	    	}
		    switch (operation) {
				case "plus":
					z = Number(a) + Number(b);
					break;
				case "minus":
					z = Number(a) - Number(b);
					break;
				case "mnoj":
					z = Number(a) * Number(b);
					break;
				case "division":
					z = Number(a) / Number(b);
					break;
			};
	
		if (String(z).length > 4) {
			z = (String(z).slice(0, 4))
		}
		document.getElementById('display').innerHTML = z;
		this.miniDisplayResult(a, operation, b, z)		
    }
 
    miniDisplay(num) {
    	let onminidisp = document.getElementById('minidisplay').innerHTML    	
    	if (num == "plus" || num == "minus" || num == "mnoj" || num == "division") {
    		switch (num) {
	    		case "plus":
	    			operation_mini_disp = "+";
	    			document.getElementById('minidisplay').innerHTML = '' + onminidisp + "+";
	    			break
	    		case "minus":
	    			operation_mini_disp = "-";
	    			document.getElementById('minidisplay').innerHTML = '' + onminidisp + "-";
	    			break
	    		case "mnoj":
	    			operation_mini_disp = "*";
	    			document.getElementById('minidisplay').innerHTML = '' + onminidisp + "*";
	    			break
	    		case "division":
	    			operation_mini_disp = "÷";
	    			document.getElementById('minidisplay').innerHTML = '' + onminidisp + "÷";
	    			break
    		}
    		stage_2 = true;
    	} else {
			if (stage_2) {
				document.getElementById('minidisplay').innerHTML = '' + a + operation_mini_disp + num;
			} else {
				document.getElementById('minidisplay').innerHTML = num;
			}
		}
    }
    miniDisplayResult(a, operation, b, z) {
    	switch (operation) {
			case "plus":
				document.getElementById('minidisplay').innerHTML = a + "+" + b + "=" + z;
				break;
			case "minus":
				document.getElementById('minidisplay').innerHTML = a + "-" + b + "=" + z;
				break;
			case "mnoj":
				document.getElementById('minidisplay').innerHTML = a + "*" + b + "=" + z;
				break;
			case "division":
				document.getElementById('minidisplay').innerHTML = a + "÷" + b + "=" + z;
				break;
		};
    }
    display(num) {
    	switch (num) {
			case "plus":
				document.getElementById('display').innerHTML = "+";
				break;
			case "minus":
				document.getElementById('display').innerHTML = "-";
				break;
			case "mnoj":
				document.getElementById('display').innerHTML = "*";
				break;
			case "division":
				document.getElementById('display').innerHTML = "÷";
				break;
			default:
				document.getElementById('display').innerHTML = num;
		};
    	return num;
    }

    clearDisplay() {
    	document.getElementById('display').innerHTML = '0';
    	document.getElementById('minidisplay').innerHTML = '';
    	return;
    }

    setA(num) {
    	if (a == undefined) {
			a = num;
			this.miniDisplay(a)
			this.display(a);
			return;
		} else {
			a = '' + a + num;
			this.display(a);
			this.miniDisplay(a)
			}
	}
	
	setB(num) {
		if (typeof num == 'number') {
			if (Boolean(b) == false && Boolean(a) == true) {
				b = num;
				this.miniDisplay(b)
				this.display(b);
				return;
			} else {
				b = '' + b + num;
				this.display(b);
				this.miniDisplay(b)
			}
	} return
	}
    setOperation(num) {
    	if (num == 'plus' || num == 'minus' || num == 'mnoj' || num == 'division') {
    		if (z) {
    			this.clearDisplay()
    			return
    		}
    		if (a, b) {
    			this.ravno()
    			return 
    		}
    		if (operation) {
    			return
    		}
    		operation = num;
	    	this.miniDisplay(num)
	    	this.display(num)
	    }
    }
    ravno() {
	    if (a && b && z == undefined) {
    		this.printing(a, operation, b)
    		return;
	    }
    }
    c() {
 		console.log('C')
    	a = operation = b = z = operation_mini_disp = stage_2 = undefined;
    	this.clearDisplay()
    	document.getElementById('minidisplay').innerHTML = '';
    	return
    }
    ce() {
	    this.clearDisplay()
		if (a, b) {
			b = undefined;
		} 
		if (a) {
			a = undefined;
		}
		if (z) {
			this.clearDisplay();
		}
		return
	
	}
	negative() {
		// if (a == undefined) {
		// 	a = 0;
		// 	this.display(a)
		// 	this.miniDisplay(a)
		// }
		if (operation == undefined && a && negative == false) {
			console.log('a')
			if (negative == false) {
				console.log ('aaa')
				a = -a
				this.display(a)
				this.miniDisplay(a)
			} 
			if (operation == undefined && a && negative == true) {
				Math.abs(a)
				this.display(a)
				this.miniDisplay(a)
			}
		} 
		if (a && operation && b && negative == false) {
			console.log('bbb')
			b = -b
			this.display(b)
			this.miniDisplay(b)
		} 
		if (a && operation && b && negative == true) {
			Math.abs(b)
			this.display(b)
			this.miniDisplay(b)
		}
	}
    start(num) {
    	if (z) {
    		this.c()
    	}
    	if (a && b && num == "plus" || num == "minus" || num == "mnoj" || num == "division") {
    		this.printing(a, operation, b)
    	}
    	if (num == undefined) {
    		this.clearDisplay()
    	}
    	if (a && num && operation) {
    		this.setB(num);
    	} 
    	if (a == undefined && num) {
    		this.setA(num);
    		return
    	};
    	if (a != undefined && b == undefined) {
    		this.setA(num);
    	}
    	
    };
    	
		
	}


let current, a, operation, b, num, ondisp, z;
let negative = false;
let stage_2;
let operation_mini_disp;
let test = new Calculator(a, operation, b, num);
test.start()




// btn.addEventListener('click', function () {
  
//   if (box.classList.contains('hidden')) {
//     box.classList.remove('hidden');
//     setTimeout(function () {
//       box.classList.remove('visuallyhidden');
//     }, 20);
//   } else {
//     box.classList.add('visuallyhidden');    
//     box.addEventListener('transitionend', function(e) {
//       box.classList.add('hidden');
//     }, {
//       capture: false,
//       once: true,
//       passive: false
//     });
//   }
  
// }, false);



















function mouseDown(j) {
	if (j != 'ravno') {
 	document.getElementById(j).style.background = "#f3f3f3";
 	// document.getElementById(j).style.color = "grey";
	}
}
function mouseUp(j) {
	if (j != 'ravno') {
 	document.getElementById(j).style.background = "white";
 	document.getElementById(j).style.color = "black";
	}
}