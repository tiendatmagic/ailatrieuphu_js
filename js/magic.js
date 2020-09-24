var ques = 0;
var score = 0;
var correct = 0;
var selectan = 1;
var question = document.getElementsByClassName("question")[0];
var answer_1 = document.getElementsByClassName("answer_1")[0];
var answer_2 = document.getElementsByClassName("answer_2")[0];
var answer_3 = document.getElementsByClassName("answer_3")[0];
var answer_4 = document.getElementsByClassName("answer_4")[0];
var info = document.getElementsByClassName("info")[0];
var start = document.getElementsByClassName("start")[0];
var numberquestion = 0;
var order = 1;
var money = 0;
var help = 0;
var help1 = 1;
var help2 = 1;
var help3 = 1;
var help4 = 1;
var time = 99999;
var timec = 30;
var tim;
var tim2;
var he1;
var he2;
var he3;
var ck = 0;
var musicbg = document.getElementById("musicbg");
var waitingg = document.getElementById("waiting");
var correctt = document.getElementById("ctrue");
var ncorrectt = document.getElementById("cfalse");
var cmuss = document.getElementById("cmus");
var cinfo = document.getElementById("cinfo");
var cover = document.getElementById("cover");
var teng = document.getElementById("teng");
var sta = document.getElementById("sta");
var countdown = document.getElementById("countdown");
window.onload = function () {
	musicbg.play();
};



function rePlay() {
	document.getElementsByClassName("time")[0].innerHTML = "Còn: " + time-- + " giây";

	if (time < 0) {
		time = 0
		lose();
	}
	if (selectan === 1) {
		clearInterval(tim);
	}
}

function winner() {
	document.getElementById("questionanswer").remove();
	var e = document.createElement("h1");
	document.getElementById("gameover").appendChild(e);
	e.appendChild(document.createTextNode("Bạn đã phá đảo thành công game này, số tiền của bạn: "));
	document.getElementById("gameover").appendChild(e);
	e.appendChild(document.createTextNode(money));
	cmuss.pause();
}

function over() {
	document.getElementById("questionanswer").remove();
	var e = document.createElement("h1");
	document.getElementById("gameover").appendChild(e);
	e.appendChild(document.createTextNode("Bạn ngu vcl, tiền nè: "));
	document.getElementById("gameover").appendChild(e);
	e.appendChild(document.createTextNode(money));
	cmuss.pause();
	cover.play();
}

function lose() {
	if (correct === 1) {
		answer_1.style.backgroundColor = "green";
		selectan = 1;
	} else if (correct === 2) {
		answer_2.style.backgroundColor = "green";
		selectan = 1;
	} else if (correct === 3) {
		answer_3.style.backgroundColor = "green";
		selectan = 1;
	} else {
		answer_4.style.backgroundColor = "green";
		selectan = 1;
	}
	ncorrectt.play();
	setTimeout(over, 3000);
}

function finfo() {
	musicbg.pause();
	cinfo.play();
	info.style.display = 'none';

	document.getElementsByClassName("tablee")[0].style.display = 'block';
	setTimeout(function () {
		document.querySelector("table tr:nth-child(2)").style.backgroundColor = 'red';
		document.querySelector("table tr:nth-child(7)").style.backgroundColor = 'red';
		document.querySelector("table tr:nth-child(12)").style.backgroundColor = 'red';
	}, 4500);

	setTimeout(function () {
		document.getElementsByClassName("tablee")[0].style.display = 'none';
		start.style.display = 'flex';
	}, 14500)
}
start.addEventListener("click", function() {
	setTimeout(fstart, 3000);
});


start.addEventListener("click", function() {
	start.style.display = 'none';
	sta.play();
});
info.addEventListener("click", finfo);

document.getElementsByClassName("h5050")[0].addEventListener("click", function () {
	if (selectan === 0) {
		if (help1 === 1) {
			document.getElementsByClassName("modal")[0].style.display = 'block';
			document.getElementsByClassName("qmodal")[0].innerText = "Bạn muốn dùng trợ giúp 50/50";

			help = 1;
		}

	}
});
document.getElementsByClassName("btnco")[0].addEventListener("click", function () {
	if (help === 1) {
		helpp1();
	}

	else if (help === 2) {
		helpp2();
	}

	else if (help === 3) {
		helpp3();
	}
	document.getElementsByClassName("modal")[0].style.display = 'none';
});
function helpp1() {


	if (help1 === 1) {
		document.getElementsByClassName("help")[0].style.backgroundColor = 'deeppink';


		help1 = 0;
		he1 = setInterval(function () {
			time++;

		}, 1000);

	}


	setTimeout(function () {
		if (correct === 1) {
			answer_1.style.backgroundColor = "rgb(105,114,255)";
			var myArray = [2, 3, 4];
			var rand = myArray[Math.floor(Math.random() * myArray.length)];
			switch(rand) {
				case 2: {
					answer_2.style.backgroundColor = "rgb(105,114,255)";
	
					answer_3.style.backgroundColor = "black";
					answer_4.style.backgroundColor = "black";
					break;
				}
	
				case 3: {
					answer_3.style.backgroundColor = "rgb(105,114,255)";
					answer_2.style.backgroundColor = "black";
					answer_4.style.backgroundColor = "black";
					break;
	
				}
	
				case 4: {
					answer_4.style.backgroundColor = "rgb(105,114,255)";
					answer_2.style.backgroundColor = "black";
					answer_3.style.backgroundColor = "black";
					break;
				}

				default:
					break;

			}
			
		}

		else if (correct === 2) {
			answer_2.style.backgroundColor = "rgb(105,114,255)";
			var myArray = [1, 3, 4];
			var rand = myArray[Math.floor(Math.random() * myArray.length)];
			switch(rand) {
			case 1: {
				answer_1.style.backgroundColor = "rgb(105,114,255)";
				answer_4.style.backgroundColor = "black";
				answer_3.style.backgroundColor = "black";
				break;
			}

			case 3: {
				answer_3.style.backgroundColor = "rgb(105,114,255)";
				answer_4.style.backgroundColor = "black";
				answer_1.style.backgroundColor = "black";
				break;
			}

			case 4: {
				answer_4.style.backgroundColor = "rgb(105,114,255)";
				answer_1.style.backgroundColor = "black";
				answer_3.style.backgroundColor = "black";
				break;
			}
			default:
					break;
		}
		}

		else if (correct === 3) {
			answer_3.style.backgroundColor = "rgb(105,114,255)";
			var myArray = [1, 2, 4];
			var rand = myArray[Math.floor(Math.random() * myArray.length)];
			switch(rand) {
			case 1: {
				answer_1.style.backgroundColor = "rgb(105,114,255)";
				answer_2.style.backgroundColor = "black";
				answer_4.style.backgroundColor = "black";
				break;
			}

			case 2: {
				answer_2.style.backgroundColor = "rgb(105,114,255)";
				answer_1.style.backgroundColor = "black";
				answer_4.style.backgroundColor = "black";
				break;
			}

			case 4:{
				answer_4.style.backgroundColor = "rgb(105,114,255)";
				answer_1.style.backgroundColor = "black";
				answer_2.style.backgroundColor = "black";
				break;
			}
			default:
					break;
		}
		}

		else if (correct === 4) {
			answer_4.style.backgroundColor = "rgb(105,114,255)";
			var myArray = [1, 2, 3];
			var rand = myArray[Math.floor(Math.random() * myArray.length)];
			switch(rand) {
		
			case 1: {
				answer_1.style.backgroundColor = "rgb(105,114,255)";
				answer_2.style.backgroundColor = "black";
				answer_3.style.backgroundColor = "black";
				break;
			}

			case 2: {
				answer_2.style.backgroundColor = "rgb(105,114,255)";
				answer_1.style.backgroundColor = "black";
				answer_3.style.backgroundColor = "black";
				break;
			}

			case 3: {
				answer_3.style.backgroundColor = "rgb(105,114,255)";
				answer_2.style.backgroundColor = "black";
				answer_1.style.backgroundColor = "black";
				break;
			}
			default:
					break;
		}
	}

		teng.play();
		close();
	}, 4000);

}

function helpp2() {


	if (help2 === 1) {
		document.getElementsByClassName("help")[1].style.backgroundColor = 'deeppink';


		help2 = 0;
		he2 = setInterval(function () {
			time++;

		}, 1000);

	}
document.getElementsByClassName("modal-q")[0].style.display='block';

tim2 = setInterval(reCountd, 1000);
}

function reCountd() {

		document.getElementsByClassName("countd")[0].innerHTML = "Còn: " + timec-- + " giây";
	
		if (timec < 0) {
	
			document.getElementsByClassName("modal-q")[0].style.display='none';
			clearInterval(tim2);
			clearInterval(he2);
			timec = 30;
			
		
		}
		if (selectan === 1) {
		
			document.getElementsByClassName("modal-q")[0].style.display='none';
			clearInterval(tim2);
			clearInterval(he2);
			
		}

		countdown.play();
}

function helpp3() {


	if (help3 === 1) {
		document.getElementsByClassName("help")[2].style.backgroundColor = 'deeppink';


		help3 = 0;
		he3 = setInterval(function () {
			time++;

		}, 1000);

	}


}

/*
function helpp4() {
	
			
	if(help3 === 1)
	{
		document.getElementsByClassName("help")[3].style.backgroundColor = 'deeppink';
		
		
	help4 = 0;
 he4 =setInterval(function(){ 
	time++;

}, 1000);
	
	}
	

}
*/
document.getElementsByClassName("hcall")[0].addEventListener("click", function () {
	if (selectan === 0) {
		if (help2 === 1) {
			document.getElementsByClassName("modal")[0].style.display = 'block';
			document.getElementsByClassName("qmodal")[0].innerText = "Bạn muốn dùng trợ giúp gọi điện thoại cho người thân?";

			help = 2;
		}
	}
});

document.getElementsByClassName("hkg")[0].addEventListener("click", function () {
	if (selectan === 0) {
		if (help3 === 1) {
			document.getElementsByClassName("modal")[0].style.display = 'block';
			document.getElementsByClassName("qmodal")[0].innerText = "Bạn muốn dùng hỏi ý kiến khán giả?";

			help = 3;
		}
	}
});

document.getElementsByClassName("close")[0].addEventListener("click", closeko);
document.getElementsByClassName("close")[1].addEventListener("click", close);
document.getElementsByClassName("btnko")[0].addEventListener("click", close);
function close() {
	document.getElementsByClassName("modal")[0].style.display = 'none';
	
	clearInterval(he1);
	clearInterval(he2);
	clearInterval(he3);
	countdown.pause();
}

function closeko() {

	
	document.getElementsByClassName("modal-q")[0].style.display='none';
	
	clearInterval(tim2);
	clearInterval(he2);
	timec = 30;
	
}
/*
document.getElementsByClassName("hkgg")[0].addEventListener("click" , function() {
	if (selectan === 0)
	{
		
		document.getElementsByClassName("help")[3].style.backgroundColor='deeppink';
	}


});
*/
answer_1.addEventListener("click", function () {
	selectan += 1;
	//clearInterval(tim);
	if (selectan === 1) {
		waitingg.play();

		time = 15;
		answer_1.style.backgroundColor = "orange";
		setTimeout(function () {
			answer_1.style.backgroundColor = "rgb(105,114,255)";
			if (correct === 1) {
				answer_1.style.backgroundColor = "deeppink";
				correctt.play();
				setTimeout(function () {
					fmoney();
					
					fstart();
				}, 2000);
			} else {
				lose();
			}
		}, 2000);
	}
});
answer_2.addEventListener("click", function () {
	selectan += 1;
	//clearInterval(tim);
	if (selectan === 1) {
		waitingg.play();

		time = 15;
		answer_2.style.backgroundColor = "orange";
		setTimeout(function () {
			answer_2.style.backgroundColor = "rgb(105,114,255)";
			if (correct === 2) {
				answer_2.style.backgroundColor = "deeppink";
				correctt.play();
				setTimeout(function () {
					fmoney();
					
					fstart();
				}, 2000);
			} else {
				lose();
			}
		}, 2000);
	}
});
answer_3.addEventListener("click", function () {
	selectan += 1;
	//	clearInterval(tim);
	if (selectan === 1) {
		waitingg.play();

		time = 15;
		answer_3.style.backgroundColor = "orange";
		setTimeout(function () {
			answer_3.style.backgroundColor = "rgb(105,114,255)";
			if (correct === 3) {
				answer_3.style.backgroundColor = "deeppink";
				correctt.play();
				setTimeout(function () {
					fmoney();
					
					fstart();
				}, 2000);
			} else {
				lose();
			}
		}, 2000);
	}
});
answer_4.addEventListener("click", function () {
	selectan += 1;
	//	clearInterval(tim);
	if (selectan === 1) {
		waitingg.play();

		time = 15;

		answer_4.style.backgroundColor = "orange";
		setTimeout(function () {
			answer_4.style.backgroundColor = "rgb(105,114,255)";
			if (correct === 4) {
				answer_4.style.backgroundColor = "deeppink";
				correctt.play();
				setTimeout(function () {
					fmoney();
					
					fstart();
				}, 2000);
			} else {
				lose();
			}
		}, 2000);
	}
});