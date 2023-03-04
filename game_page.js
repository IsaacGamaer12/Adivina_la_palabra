//1. Crea dos variables para almacenar los nombres de los jugadores en localStorage:

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


//2. Declara las 2 variables para la puntuación de los jugadores con valor de 0:
player1_score = 0;
player2_score = 0;

//innerHTML sirve para mostrar algo nuevo en la pag web
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

//3. Coloca la puntuación de los jugadores en la pag web utilizando innerHTML:
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

//4. Coloca los textos para el turno de los jugadores utilizando innerHTML
document.getElementById("player_question").innerHTML = "Turno de preguntar: " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de responder: " + player2_name;

function send() {
    // 5. Declara la función get_word, su valor será la palabra que ingrese el usuario la caja de texto:
    var get_word = document.getElementById("word").value;


    //6. Convierte la palabra que escriba el jugador en minúsculas:
    word = get_word.toLowerCase();

    //7. Declara la variable charAt1 para obtener una letra de la palabra:
    charAt1 = word.charAt(1);
    

    //Aquí dividimos la palabra para que puedan ocultarse algunas letras:
    lenght_divide_2 = Math.floor(word.length/2);

    //8. Declara la variable charAt2 para obtener otra letra de la palabra:
    charAt2 = word.charAt(lenght_divide_2);

    //9. Obtén la última letra de la palabra utilizando word.length - 1:
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);

    //10. Coloca las variables que reemplazarán las letras pos espacios vacíos:
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    
    //Cambiar el turno de los jugadores:
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase();

    if (answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Turno para preguntar:" + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Turno para preguntar:" + player1_name;    
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Turno para responder:" + player2_name;
        } else {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Turno para responder:" + player1_name;    
        }

        document.getElementById("output").innerHTML = "";

}





