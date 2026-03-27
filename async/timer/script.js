// let count = 0;
// let timeriD =  setInterval(()=>{
//     console.log(count)
//     count++;
// },1000)

// setTimeout(()=>{
//     clearInterval(timeriD)
// },3000)


let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let display = document.getElementById('display');
let timerId = null;


let sec = 0;
let min = 0;
let hour = 0;

function formatTimer(num){
    if(num<10){
        return '0' + num
    }else{
        return `${num}`
    }
}

function displayTimer(){
    display.innerText = `${formatTimer(hour)}:${formatTimer(min)}:${formatTimer(sec)}`
}

start.addEventListener('click',()=>{
    //clear the timer if it already exists 
    if(timerId) return;

    timerId = setInterval(()=>{
        sec++;
        if(sec == 60){
            sec = 0
            min++;

            if(min == 60){
                min = 0
                hour++;
            }
        }
        displayTimer();
    },1000)
})

stop.addEventListener('click',()=>{
    if(timerId){
        clearInterval(timerId);
        timerId = null
    }
})

reset.addEventListener('click',()=>{
    if(timerId) clearInterval;

    sec =0;
    min =0;
    hour =0;
    timerId = null;
    displayTimer();

})