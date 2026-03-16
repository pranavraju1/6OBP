// insertBefore
// insertBefore() is used to insert a new node before before an existing
// child node of a specefic parent.

// let bananaElement = document.createElement('li');
// bananaElement.innerText = "Banana";

// let fruits = document.getElementById('fruits');
// let mangoElement = fruits.children[1];

// Syntax
// parentElement.insertBefore(newElement, ref(the element you want to insert before))
// fruits.insertBefore(bananaElement, mangoElement);



// prepend()
// it inserts content at the begining of a parent element, right before the first child
// let continer = document.getElementById('continer');
// let p = document.createElement('p');
// p.innerText = "New para"
// continer.prepend(p)


// remove()
// deletes the element fromt the DOM directly (no need to access the parent)
// let removeMe = document.getElementById('removeMe');
// removeMe.remove();

// removeChild
// it removes a child node from its parent element. 
// it must be called on the parent node
// let todo = document.getElementById('todo');
// let removeItem = todo.children[1] 
// todo.removeChild(removeItem);


// closest()
// it searches up the DOM tree and returns the nearest ancestor 
// (including itself) the matches the given selector.
// let btn = document.getElementById('btn');
// let card = btn.closest('.card');
// console.log(card);



// children
//it returns an HTML collection of only the element-type child nodes.
// excludes text node and comments 
// let list = document.getElementById('list')
// console.log(list.children)


// childNodes
// it returns a NodeList of all the child nodes, including text nodes
// and comment nodes.
// console.log(list.childNodes)










// let animalList = document.getElementById('animalList');
// let dog = document.getElementById('dog');

// evevent propogation: the movement of event when it occurs
// it is determined by the 3rd arg which by default if false
// if the 3rd arg is false then that means the event is going to bubble
// event bubling is when the event goes from child to parent
// the 3rd arg by default is false
// dog.addEventListener('click', ()=>{
//     console.log("dog is clicked")
// }, false)

// animalList.addEventListener('click', ()=>{
//     console.log("animal list is clicked")  
// }, false)




// event capturing (opposite of event bubbling): 
// when event goes from parent to child
// the 3rd arg needs to be set true for the parent for this to happen
// dog.addEventListener('click', ()=>{
//     console.log("dog is clicked")
// }, true)

// animalList.addEventListener('click', ()=>{
//     console.log("animal list is clicked")  
// }, true);



// better example
// dog.addEventListener('click', ()=>{
//     console.log("dog is clicked")
//     dog.style.color = "red"
// })

// li = document.querySelectorAll('li')
// animalList.addEventListener('click', ()=>{
//     console.log("animal list is clicked")  
//     li.forEach(element => {
//         element.style.color = "blue"  
//     });
// }, true);


//  e.stopPropagation(): stops the propogation of the event
// used to stop bubling or capturing
// dog.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log("dog is clicked")
// })

// animalList.addEventListener('click', ()=>{
//     console.log("animal list is clicked")  
// });