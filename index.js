const display = document.getElementById("display");
let timer=null;
let startTime = 0;             // initially time is 0
let elapsedTime = 0;
let isRunning = false;        //boolean function

function start(){
    if(!isRunning){
        startTime= Date.now() - elapsedTime;
       timer = setInterval(update, 10);
       isRunning = true;

    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;                              // if isrunning = true then there will be error of continuation
    }

}
function reset(){
     clearInterval(timer);
     startTime = 0;            
     elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";                  // this will again set the timer to the given initial display
}
function update(){
    const currentTime =Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / ( 1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime /( 1000 * 60) % 60 );
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);  

   hours = String(hours).padStart(2, "0");
   minutes = String(minutes).padStart(2, "0");
   seconds = String(seconds).padStart(2, "0");
   milliseconds = String(milliseconds).padStart(2, "0");
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
