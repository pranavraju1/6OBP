
function throttle(fn, delay){
    // stores timestamp of last function call
    let lastCall = 0;

    return function(...args){
        // current timestamp
        const now = Date.now();

        // if less than 'delay' time has passed since last call
        // exit early w/o executing the function(prevents spam)
        if( now - lastCall < delay){
            return;
        }

        // update last call to now
        lastCall = now;
        return fn(...args)
    }
}

function sendChatMessage(message){
    // console.log(`Sending Message`, message)
    return `Sending Message`+ message
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000);
console.log(sendChatMessageWithSlowMode("Hi")) 
console.log(sendChatMessageWithSlowMode("Hello")) 
console.log(sendChatMessageWithSlowMode("Hello world")) 
console.log(sendChatMessageWithSlowMode("yellow")) 
console.log(sendChatMessageWithSlowMode("end")) 
// console.log(sendChatMessageWithSlowMode("Hi")) 
// sendChatMessageWithSlowMode("Hello")
// sendChatMessageWithSlowMode("Hello world")
// sendChatMessageWithSlowMode("yellow")
// sendChatMessageWithSlowMode("end")