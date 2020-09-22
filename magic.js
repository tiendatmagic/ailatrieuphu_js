var ques = 0;
var score = 0;
var correct = 0;
var selectan = 1;
var question = document.getElementsByClassName("question")[0];
var answer_1 = document.getElementsByClassName("answer_1")[0];
var answer_2 = document.getElementsByClassName("answer_2")[0];
var answer_3 = document.getElementsByClassName("answer_3")[0];
var answer_4 = document.getElementsByClassName("answer_4")[0];
var start = document.getElementsByClassName("start")[0];
var numberquestion = 0;
var order = 1;
var money = 0;
var time = 15;
var musicbg = document.getElementById("musicbg");
var waitingg = document.getElementById("waiting");
var correctt = document.getElementById("ctrue");
var ncorrectt = document.getElementById("cfalse");
var cmuss = document.getElementById("cmus");
window.onload = function () {
	musicbg.play();
};



function rePlay() {
	document.getElementsByClassName("time")[0].innerHTML = "Còn: " + time-- + " giây";
	var tim = setTimeout(rePlay, 1000);
	if (time < 0) {
		time = 0
		lose();
	}
	if (selectan === 1) {
		clearTimeout(tim);
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

function fmoney() {
	switch (numberquestion) {
		case 1:
			money = 100;
			break;
		case 2:
			money = 200;
			break;
		case 3:
			money = 300;
			break;
		case 4:
			money = 500;
			break;
		case 5:
			money = 1000;
			break;
		case 6:
			money = 2000;
			break;
		case 7:
			money = 4000;
			break;
		case 8:
			money = 8000;
			break;
		case 9:
			money = 16000;
			break;
		case 10:
			money = 32000;
			break;
		case 11:
			money = 64000;
			break;
		case 12:
			money = 125000;
			break;
		case 13:
			money = 250000;
			break;
		case 14:
			money = 500000;
			break;
		case 15:
			money = 1000000;
			break;
		default:
			break;
	}
}
//start.addEventListener("click", fstart);
start.addEventListener("click", finfo);
answer_1.addEventListener("click", function () {
	selectan += 1;
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