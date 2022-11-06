player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question").innerHTML = "Question turn- " + player1_name;
document.getElementById("answer").innerHTML = "Answer turn- " + player2_name;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id='work_display'>"+number1+" X "+number2+"</h4>"
    input_box = "<br>Answer : <input id='input_check_box type='text'>";
    check_button = "<br><br><button onclickevent='check()' class='btn tn-info'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_1").value = "";
}
    
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        } else {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1_name;
    }
document.getElementById("output").innerHTML = "";
function update_score() {
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score",player2_score);
}

}