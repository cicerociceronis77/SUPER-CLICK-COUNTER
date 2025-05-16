const tempo = document.querySelector('.time');
const secondiAgg = document.querySelector('.secondi-tempo')
const centesimiSec = document.querySelector('.centesimi')
const bottone5 = document.querySelector('.bottoni-tempo5');
const bottone10 = document.querySelector('.bottoni-tempo10');
const bottone30 = document.querySelector('.bottoni-tempo30');
const bottoneClick = document.querySelector('.count-btn');
const conteggio = document.querySelector('.conto');
const azzeratore = document.querySelector('.azzera-btn');
const popUp = document.querySelector('.pu-finetempo');
const tempoScelto = document.getElementById('tempo-scelto');
const clickTot = document.getElementById('c-totali');
const clickPerS = document.getElementById('cps');
const riprova = document.querySelector('.try-again');
let giocoAttivo = true;


//funzione che fa partire un countdown di x secondi
//con tanto di centesimi di secondo
let countdown = null;
function timerParte(secondi){
    let centiSecondi = 0;
    secondiAgg.textContent = secondi;

    countdown = setInterval(() => {
        
        if (secondi === 0 && centiSecondi === 0){
            clearInterval(countdown);
            return;
        } 
        if (centiSecondi > 0){
            centiSecondi--;
        } else {
            secondi--;
            centiSecondi = 99;
        }
        secondiAgg.textContent = secondi;
        centesimiSec.textContent = centiSecondi.toString().padStart(2, '0');
        //console.log(`${secondi}:${centiSecondi.toString().padStart(2, '0')}`);

        if(secondiAgg.textContent === '0' && centesimiSec.textContent === '00') {
            popUp.style.display = 'flex';
            tempoScelto.textContent = secondiSelezionati;
            clickTot.textContent = contone;
            clickPerS.textContent = `${(contone/secondiSelezionati).toFixed(2)} Click/s`;
        }

    }, 10);
}

secondiAgg.textContent = '00';
let secondiSelezionati = 0;
function cliccaBottone(bottoneX){
    secondiAgg.textContent = bottoneX;
    centesimiSec.textContent = '00';
    //console.log(bottoneX);
    secondiSelezionati = bottoneX;
}

let contone = 0;
function funzioneConto(){
    
    giocoAttivo = true;
    if(giocoAttivo){

            if(contone === 0 && secondiAgg.textContent > 0){
            contone++;
            conteggio.textContent = contone;
            timerParte(secondiSelezionati);
        } else {
            contone++;
            conteggio.textContent = contone;
        }
        
    }
    

}

function azzeraConto(){
    contone = 0
    conteggio.textContent = contone
    clearInterval(countdown);
    secondiAgg.textContent = '00';
    centesimiSec.textContent = '00';
    return;
}

function tryAgain(){
    azzeraConto();
    popUp.style.display = 'none';
}
