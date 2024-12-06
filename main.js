 
 
 
 
 
 
const display = document.getElementById("display")
let timer = null;
let startTime = 0
let elapsedTime = 0
let isRunniing = false

function start(){
    if(!isRunniing){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update, 10);
        isRunniing = true;
        
    }


    
}


function stop(){
    
    if(isRunniing){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunniing = false
    }
}


function reset(){
    clearInterval(timer)
    let startTime = 0
    let elapsedTime = 0
    let isRunniing = false
    display.textContent = "00:00:00:00"

}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let second = Math.floor(elapsedTime / 1000 % 60)
    let millisecond = Math.floor(elapsedTime % 1000 / 10 )

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    second = String(second).padStart(2, "0")
    millisecond = String(millisecond).padStart(2, "0")

    display.textContent = `${hours}:${minutes}:${second}:${millisecond}`
}










