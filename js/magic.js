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
var help1, help2, help3, help4 = 1;
var time = 99999;
var musicbg = document.getElementById("musicbg");
var waitingg = document.getElementById("waiting");
var correctt = document.getElementById("ctrue");
var ncorrectt = document.getElementById("cfalse");
var cmuss = document.getElementById("cmus");
var cinfo = document.getElementById("cinfo");
var cover = document.getElementById("cover");
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

	document.getElementsByClassName("table")[0].style.display = 'flex';
	setTimeout(function () {
		document.querySelector("table tr:nth-child(2)").style.backgroundColor = 'red';
		document.querySelector("table tr:nth-child(7)").style.backgroundColor = 'red';
		document.querySelector("table tr:nth-child(12)").style.backgroundColor = 'red';
	}, 4500);

	setTimeout(function () {
		document.getElementsByClassName("table")[0].style.display = 'none';
		start.style.display = 'flex';
	}, 14500)
}
start.addEventListener("click", fstart);
info.addEventListener("click", finfo);

document.getElementsByClassName("h5050")[0].addEventListener("click", function () {
	if (selectan === 0) {
		help = 1;
		help1 = 0;
		if(help1 === 0)
		{
			document.getElementsByClassName("help")[0].style.backgroundColor = 'deeppink';
			document.getElementsByClassName("modal")[0].style.display = 'block';
		}
		
	}


});

document.getElementsByClassName("hcall")[0].addEventListener("click", function () {
	if (selectan === 0) {
		help = 1;
		help2 = 0;

		if(help2 === 0)
		{
			document.getElementsByClassName("help")[1].style.backgroundColor = 'deeppink';
			document.getElementsByClassName("modal")[0].style.display = 'block';
		}
	}


});

document.getElementsByClassName("hkg")[0].addEventListener("click", function () {
	if (selectan === 0) {
		help = 1;
		help3 = 0;
		
		if(help3 === 0)
		{
			document.getElementsByClassName("help")[2].style.backgroundColor = 'deeppink';
			document.getElementsByClassName("modal")[0].style.display = 'block';
		}
	}


});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
	document.getElementsByClassName("modal")[0].style.display = 'none';
});
/*
document.getElementsByClassName("hkgg")[0].addEventListener("click" , function() {
	if (selectan === 0)
	{
		help = 1;
		document.getElementsByClassName("help")[3].style.backgroundColor='deeppink';
	}


});
*/
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