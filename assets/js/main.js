let statusimg = false;
function OneClick()
{
    let borderimg = document.querySelector("#challenge_1_img");
    if (statusimg == false){
        statusimg = true;
        borderimg.style.width = "350px";
        borderimg.style.borderColor = "red";
        borderimg.style.borderStyle = "solid";
        borderimg.style.borderWidth = '2px';
        borderimg.style.transition = "1s";

    }
    else{
        statusimg = false;
        borderimg.style.width = "300px";
        borderimg.style.borderColor = "white";
    }
}
function CalTotal(){
    let total = 0;
    let alerta = document.querySelector("#alerta");
    let alerta2 = document.querySelector("#alerta2");
    let alerta3 = document.querySelector("#alerta3");
    alerta.innerHTML = "";
    alerta3.innerHTML = "";
    alerta2.innerHTML = "";
    let challenge_2_card1_input = Number(document.querySelector ("#challenge_2_card1_input").value);
    let challenge_2_card2_input = Number(document.querySelector ("#challenge_2_card2_input").value);
    let challenge_2_card3_input = Number(document.querySelector ("#challenge_2_card3_input").value);
    let challenge_2_total_Ctotal = document.querySelector ("#challenge_2_total_Ctotal");
    console.log(challenge_2_card1_input);
    total = challenge_2_card1_input + challenge_2_card2_input + challenge_2_card3_input;
    if(challenge_2_card1_input <0){
        alerta.innerHTML = "El valor debe ser mayor a 0";
    }
    else if (challenge_2_card2_input <0){
        alerta2.innerHTML = "El valor debe ser mayor a 0";
    }
    else if(challenge_2_card3_input <0){
        alerta3.innerHTML = "El valor debe ser mayor a 0";
    }
    else{
        if(total > 10){
            challenge_2_total_Ctotal.innerHTML = " Llevas demasiados stickers";
        }
        else{
            challenge_2_total_Ctotal.innerHTML = total;
        }
    }
}
function Validpasw(){
    let callenge_3_pasw_result = document.querySelector("#callenge_3_pasw_result");
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let select3 = document.getElementById("select3").value;
    let password = select1+select2+select3;
    if( password == "911"){
        callenge_3_pasw_result.innerHTML = "Password 1 correcto";
    }
    else if(password == "714"){
        callenge_3_pasw_result.innerHTML = "Password 2 correcto";
    }
    else{
        callenge_3_pasw_result.innerHTML = "Password Incorrecto";
    }
}