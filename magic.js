
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

window.onload = function () {
    musicbg.play();
};

function fstart() {



    // selectan = 0;
    // time = 15;


    musicbg.pause();
    start.style.display = 'none';
    var math = Math.ceil(Math.random() * 30);
    order = math;
    document.getElementsByClassName("cau")[0].innerText = "Câu:";
    document.getElementById("questionanswer").style.display = 'block';
    var moneyy = document.getElementsByClassName("money")[0].innerHTML = money;
    answer_1.style.backgroundColor = "rgb(105,114,255)";
    answer_2.style.backgroundColor = "rgb(105,114,255)";
    answer_3.style.backgroundColor = "rgb(105,114,255)";
    answer_4.style.backgroundColor = "rgb(105,114,255)";


    if (numberquestion === 15) {
        winner();

    }

    else {
        setTimeout(function () {
            selectan = 0;
            rePlay();
        }, 1000);

        switch (math) {
            case 1:
                question.innerText = question_1.question;
                answer_1.innerText = question_1.answer_a;
                answer_2.innerText = question_1.answer_b;
                answer_3.innerText = question_1.answer_c;
                answer_4.innerText = question_1.answer_d;
                numberquestion += 1;

                correct = 2;
                break;
            case 2:
                question.innerText = question_2.question;
                answer_1.innerText = question_2.answer_a;
                answer_2.innerText = question_2.answer_b;
                answer_3.innerText = question_2.answer_c;
                answer_4.innerText = question_2.answer_d;
                numberquestion += 1;

                correct = 3;

                break;
            case 3:
                question.innerText = question_3.question;
                answer_1.innerText = question_3.answer_a;
                answer_2.innerText = question_3.answer_b;
                answer_3.innerText = question_3.answer_c;
                answer_4.innerText = question_3.answer_d;
                numberquestion += 1;

                correct = 1;
                break;
            case 4:
                question.innerText = question_4.question;
                answer_1.innerText = question_4.answer_a;
                answer_2.innerText = question_4.answer_b;
                answer_3.innerText = question_4.answer_c;
                answer_4.innerText = question_4.answer_d;
                numberquestion += 1;

                correct = 2;
                break;
            case 5:
                question.innerText = question_5.question;
                answer_1.innerText = question_5.answer_a;
                answer_2.innerText = question_5.answer_b;
                answer_3.innerText = question_5.answer_c;
                answer_4.innerText = question_5.answer_d;
                numberquestion += 1;

                correct = 4;
                break;
            case 6:
                question.innerText = question_6.question;
                answer_1.innerText = question_6.answer_a;
                answer_2.innerText = question_6.answer_b;
                answer_3.innerText = question_6.answer_c;
                answer_4.innerText = question_6.answer_d;
                numberquestion += 1;

                correct = 1;
                break;
            case 7:
                question.innerText = question_7.question;
                answer_1.innerText = question_7.answer_a;
                answer_2.innerText = question_7.answer_b;
                answer_3.innerText = question_7.answer_c;
                answer_4.innerText = question_7.answer_d;
                numberquestion += 1;

                correct = 1;
                break;
            case 8:
                question.innerText = question_8.question;
                answer_1.innerText = question_8.answer_a;
                answer_2.innerText = question_8.answer_b;
                answer_3.innerText = question_8.answer_c;
                answer_4.innerText = question_8.answer_d;
                numberquestion += 1;

                correct = 3;
                break;
            case 9:
                question.innerText = question_9.question;
                answer_1.innerText = question_9.answer_a;
                answer_2.innerText = question_9.answer_b;
                answer_3.innerText = question_9.answer_c;
                answer_4.innerText = question_9.answer_d;
                numberquestion += 1;

                correct = 2;
                break;
            case 10:
                question.innerText = question_10.question;
                answer_1.innerText = question_10.answer_a;
                answer_2.innerText = question_10.answer_b;
                answer_3.innerText = question_10.answer_c;
                answer_4.innerText = question_10.answer_d;
                numberquestion += 1;

                correct = 1;
                break;


            case 11:
                question.innerText = question_11.question;
                answer_1.innerText = question_11.answer_a;
                answer_2.innerText = question_11.answer_b;
                answer_3.innerText = question_11.answer_c;
                answer_4.innerText = question_11.answer_d;
                numberquestion += 1;

                correct = 4;
                break;

            case 12:
                question.innerText = question_12.question;
                answer_1.innerText = question_12.answer_a;
                answer_2.innerText = question_12.answer_b;
                answer_3.innerText = question_12.answer_c;
                answer_4.innerText = question_12.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            case 13:
                question.innerText = question_13.question;
                answer_1.innerText = question_13.answer_a;
                answer_2.innerText = question_13.answer_b;
                answer_3.innerText = question_13.answer_c;
                answer_4.innerText = question_13.answer_d;
                numberquestion += 1;

                correct = 4;
                break;

            case 14:
                question.innerText = question_14.question;
                answer_1.innerText = question_14.answer_a;
                answer_2.innerText = question_14.answer_b;
                answer_3.innerText = question_14.answer_c;
                answer_4.innerText = question_14.answer_d;
                numberquestion += 1;

                correct = 4;
                break;

            case 15:
                question.innerText = question_15.question;
                answer_1.innerText = question_15.answer_a;
                answer_2.innerText = question_15.answer_b;
                answer_3.innerText = question_15.answer_c;
                answer_4.innerText = question_15.answer_d;
                numberquestion += 1;

                correct = 4;
                break;

            case 16:
                question.innerText = question_16.question;
                answer_1.innerText = question_16.answer_a;
                answer_2.innerText = question_16.answer_b;
                answer_3.innerText = question_16.answer_c;
                answer_4.innerText = question_16.answer_d;
                numberquestion += 1;

                correct = 1;
                break;

            case 17:
                question.innerText = question_17.question;
                answer_1.innerText = question_17.answer_a;
                answer_2.innerText = question_17.answer_b;
                answer_3.innerText = question_17.answer_c;
                answer_4.innerText = question_17.answer_d;
                numberquestion += 1;

                correct = 1;
                break;

            case 18:
                question.innerText = question_18.question;
                answer_1.innerText = question_18.answer_a;
                answer_2.innerText = question_18.answer_b;
                answer_3.innerText = question_18.answer_c;
                answer_4.innerText = question_18.answer_d;
                numberquestion += 1;

                correct = 1;
                break;

            case 19:
                question.innerText = question_19.question;
                answer_1.innerText = question_19.answer_a;
                answer_2.innerText = question_19.answer_b;
                answer_3.innerText = question_19.answer_c;
                answer_4.innerText = question_19.answer_d;
                numberquestion += 1;

                correct = 1;
                break;

            case 20:
                question.innerText = question_20.question;
                answer_1.innerText = question_20.answer_a;
                answer_2.innerText = question_20.answer_b;
                answer_3.innerText = question_20.answer_c;
                answer_4.innerText = question_20.answer_d;
                numberquestion += 1;

                correct = 1;
                break;

            case 21:
                question.innerText = question_21.question;
                answer_1.innerText = question_21.answer_a;
                answer_2.innerText = question_21.answer_b;
                answer_3.innerText = question_21.answer_c;
                answer_4.innerText = question_21.answer_d;
                numberquestion += 1;

                correct = 2;
                break;

            case 22:
                question.innerText = question_22.question;
                answer_1.innerText = question_22.answer_a;
                answer_2.innerText = question_22.answer_b;
                answer_3.innerText = question_22.answer_c;
                answer_4.innerText = question_22.answer_d;
                numberquestion += 1;

                correct = 2;
                break;

            case 23:
                question.innerText = question_23.question;
                answer_1.innerText = question_23.answer_a;
                answer_2.innerText = question_23.answer_b;
                answer_3.innerText = question_23.answer_c;
                answer_4.innerText = question_23.answer_d;
                numberquestion += 1;

                correct = 2;
                break;

            case 24:
                question.innerText = question_24.question;
                answer_1.innerText = question_24.answer_a;
                answer_2.innerText = question_24.answer_b;
                answer_3.innerText = question_24.answer_c;
                answer_4.innerText = question_24.answer_d;
                numberquestion += 1;

                correct = 2;
                break;

            case 25:
                question.innerText = question_25.question;
                answer_1.innerText = question_25.answer_a;
                answer_2.innerText = question_25.answer_b;
                answer_3.innerText = question_25.answer_c;
                answer_4.innerText = question_25.answer_d;
                numberquestion += 1;

                correct = 2;
                break;

            case 26:
                question.innerText = question_26.question;
                answer_1.innerText = question_26.answer_a;
                answer_2.innerText = question_26.answer_b;
                answer_3.innerText = question_26.answer_c;
                answer_4.innerText = question_26.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            case 27:
                question.innerText = question_27.question;
                answer_1.innerText = question_27.answer_a;
                answer_2.innerText = question_27.answer_b;
                answer_3.innerText = question_27.answer_c;
                answer_4.innerText = question_27.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            case 28:
                question.innerText = question_28.question;
                answer_1.innerText = question_28.answer_a;
                answer_2.innerText = question_28.answer_b;
                answer_3.innerText = question_28.answer_c;
                answer_4.innerText = question_28.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            case 29:
                question.innerText = question_29.question;
                answer_1.innerText = question_29.answer_a;
                answer_2.innerText = question_29.answer_b;
                answer_3.innerText = question_29.answer_c;
                answer_4.innerText = question_29.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            case 30:
                question.innerText = question_30.question;
                answer_1.innerText = question_30.answer_a;
                answer_2.innerText = question_30.answer_b;
                answer_3.innerText = question_30.answer_c;
                answer_4.innerText = question_30.answer_d;
                numberquestion += 1;

                correct = 3;
                break;

            default:
                math = Math.ceil(Math.random() * 30);
                break;
        }
        document.getElementsByClassName("numberquestion")[0].innerHTML = numberquestion;
    }

}

function rePlay() {

    document.getElementsByClassName("time")[0].innerHTML = time--;
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
}

function over() {
    document.getElementById("questionanswer").remove();
    var e = document.createElement("h1");
    document.getElementById("gameover").appendChild(e);
    e.appendChild(document.createTextNode("Bạn ngu vcl, tiền nè: "));
    document.getElementById("gameover").appendChild(e);
    e.appendChild(document.createTextNode(money));

}

function lose() {
    if (correct === 1) {
        answer_1.style.backgroundColor = "green";
        selectan = 1;


    }

    else if (correct === 2) {
        answer_2.style.backgroundColor = "green";
        selectan = 1;

    }

    else if (correct === 3) {
        answer_3.style.backgroundColor = "green";
        selectan = 1;

    }

    else {
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
start.addEventListener("click", fstart);
//start.addEventListener("click",  rePlay);
answer_1.addEventListener("click", function () {
    // waitingg.play();

    selectan += 1;
    if (selectan === 1) {

        waitingg.play();
        time = 15;
        // 
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
            }
            else {
                lose();
            }

            //



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

            //
            if (correct === 2) {

                answer_2.style.backgroundColor = "deeppink";
                //selectan = 1;
                correctt.play();
                setTimeout(function () {
                    fmoney();
                    fstart();
                }, 2000);
            }
            else {
                lose();
            }
            //



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

            //
            if (correct === 3) {
                answer_3.style.backgroundColor = "deeppink";

                correctt.play();
                setTimeout(function () {
                    fmoney();
                    fstart();
                }, 2000);
            }
            else {
                lose();
            }
            //



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

            //
            if (correct === 4) {
                answer_4.style.backgroundColor = "deeppink";

                correctt.play();
                setTimeout(function () {
                    fmoney();
                    fstart();
                }, 2000);
            }
            else {
                lose();
            }
            //



        }, 2000);
    }
});