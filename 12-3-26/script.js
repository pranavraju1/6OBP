// Advanced JS event interactions
// keydown : Fires when a key is pressed down (repeats if held)
// keyup : Fires when a key is released (does not repeat)

// document.addEventListener('keydown', function(e){
//     // e.key is used to get the registerd key
//     console.log('key pressed', e.key)

//     switch(e.key){
//         case 'ArrowUp':
//             console.log("moving up");
//             break;
//         case 'ArrowLeft':
//             console.log("moving left");
//             break;
//         case 'Enter':
//             console.log("Action confirmed");
//             break;
//     }
// });


// example2:
// document.addEventListener('keydown', function(e){
  
//     // e.ctrlKey is for ctrl key
//     // e.metaKey is for command key in mac
//     if((e.ctrlKey || e.metaKey) && e.key == 's'){
//         console.log("document saved")
//     }

//     if((e.ctrlKey || e.metaKey) && e.key == 'z'){
//         console.log("undo document")
//     }

// });

// e.ctrlKey -> ctrl key
// e.shiftKey -> shift key
// e.altKey -> alt key
// e.metaKey -> Meta/Cmd key



// Mouse Events
// clinetX/clinetY -> relative to viewport (visible browser window)
// pageX/pageY -> relative to entire document (includes scroll)
// screenX/screenY -> relative to physical screen
// offsetX/offsetY -> relative to target element


// let body = document.querySelector('body');
// body.addEventListener('click', (e)=>{
//     let x = e.clientX; 
//     let y = e.clientY;
//     console.log("x", x) 
//     console.log("y", y) 

// });


// Drag and Drop


// let div1 = document.getElementById('div1');
// let img = document.querySelector('img');

// div1.addEventListener('drop',(e)=>{
//     e.preventDefault();
//     console.log("element dropped")
//     const data = e.dataTransfer.getData("text");
//     e.target.appendChild(document.getElementById(data))
// })

// div1.addEventListener('dragover',(e)=>{
//     e.preventDefault();
//     console.log("drag over")
// })

// img.addEventListener('dragstart',(e)=>{
//     console.log("drag start")
//     e.dataTransfer.setData("text", e.target.id)

// })



// Touch events
// mousedown -> for registering mouse click down
// mouseup -> for registering mouse click up
// mousemove -> continuesly fires when mouse moves
// mouseover -> fires when the cursor is on the element
// mouseout -> fires when the cursor is out of the element

const box = document.getElementById("box");
box.addEventListener('mouseover', ()=>{
    box.innerHTML = "Mouse is over me!"
})

box.addEventListener('mouseout', ()=>{
    box.innerHTML = "Mouse is out"
})

document.addEventListener('mousedown',()=>{
    console.log("mouse clicked")
})





// scroll events
// let scrollElement = document.getElementById('scrollElement');
// let demoText = document.getElementById('demoText');
// let x = 0;
// scrollElement.addEventListener('scroll',()=>{
//     demoText.innerText = x++;
// })








// HW 1 try to create a TODO list using only HTML, css and JS 
// if you have made the above try to implement the drag and drop feature of the taks

// HW 2 try to create a paralax effect only using html, css and JS 