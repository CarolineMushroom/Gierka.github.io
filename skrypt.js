alert("Witaj, króliczku doświadczalny, zagrajmy w grę.")

let number= Math.floor(Math.random() * 11);

function play() {
    let userNumber= document.getElementById("userNumber").value;
    let message;

    if(userNumber > number) {
        message = "Mniejszą liczbę wybierz, Panie"; 
    } else if (userNumber < number){
        message ="Większą liczbę wybierz, Panie";
    } else {
        message = "Gratuluję, wygrałeś nic";
    }
         document.getElementById("message").innerHTML= message;
         }