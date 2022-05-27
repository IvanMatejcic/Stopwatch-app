//pocetno definiranje varijabli
let maxSek = 60;
let maxSto = 100;
let pocMin = 0;
let pocSek = 0;
let pocSto = 0;

//referenciranje svega iz .html file-a i manipuliranje html-om
let min = document.querySelector("#minute");
let sek = document.querySelector("#sekunde");
let sto = document.querySelector("#stotinke");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");

let intervalOnGoing = false;


const STOPERICA = () => {
    setInterval(() => {
        if(intervalOnGoing)
        {
            if(maxSto -1 <= pocSto)
            {   
                if(maxSek -1 <= pocSek)
                {
                    pocMin++;
                    pocSek = 0;
                    pocSto = 0;
                    sek.innerText = "0" + pocSek;
                    min.innerText = pocMin;
                    pocMin <= 9 ? min.innerText = "0" + pocMin : min.innerText = pocMin;
                }
                else
                {
                    pocSto = 0;
                    pocSek++;
                    sto.innerText = pocSto;
                    sek.innerText = pocSek;
                    pocSek <= 9 ? sek.innerText = "0" + pocSek : sek.innerText = pocSek;
                }
            }
            else
            {
                pocSto++;
                sto.innerText = pocSto;
                pocSto <= 9 ? sto.innerText = "0" + pocSto : sto.innerText = pocSto;
            }
        }
        
    }, 10)
}

STOPERICA(); //POZIVANJE

const STOP = () => false;
stopButton.addEventListener("click", () => intervalOnGoing = STOP());

const RESET = () => {
    pocSto = 0;
    pocSek = 0;
    pocMin = 0;
    sto.innerText = "00";
    sek.innerText = "00";
    min.innerText = "00"; 
}

resetButton.addEventListener("click", RESET);
startButton.addEventListener("click", ()=> intervalOnGoing = true);