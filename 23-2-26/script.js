// let textElement = document.getElementById('textElement');

// let textValue

// textElement.addEventListener('input',(e)=>{
//     console.log(e.target.value)
// })

// task store the input value in textVlaue
//  when the button is clicked

// let storingText = document.getElementById('storingText');
// storingText.addEventListener('click', (e)=>{
//     e.preventDefault();
//     textValue = textElement.value;
//     console.log(textValue);
// })

// let formElement = document.querySelector('#formElement');

// formElement.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log("form is submited")

// })

// let UserArray = [];
// {
//     username,
//     password,
//     email
// }

// let formElement = document.querySelector('#formElement');
// formElement.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let username = document.querySelector("#username").value
//     let password = document.querySelector("#password").value
//     let email = document.querySelector("#email").value

//     let obj = {
//         username,
//         password,
//         email
//     }

//     UserArray.push(obj);
//     // UserArray = [...UserArray, obj]

//     console.log(UserArray)
// })






let formElement = document.querySelector("#formElement");
formElement.addEventListener('submit', (e)=>{
    e.preventDefault();

    let textElement =  document.querySelector("#textElement").value.trim();
    let numberElement =  document.querySelector("#numberElement").value.trim();
    let emailElement =  document.querySelector("#emailElement").value.trim();
    let passwordElement =  document.querySelector("#passwordElement").value.trim();
    let confirmPasswordElement =  document.querySelector("#confirmPasswordElement").value.trim();

    // if(textElement == "" || numberElement == "" || emailElement == "" || passwordElement =="" || confirmPasswordElement == "" ){
    //     if(textElement == ""){
    //         let textElementLabel = document.getElementById('textElement-label');
    //         textElementLabel.style.display = "block"
    //         textElementLabel.innerText = "text Element is empty"
    //         textElementLabel.focus();

    //     }
    // }

    // if(passwordElement !== confirmPasswordElement){
    //     alert("wrong password")
    // }


    // slecting the checked radio button
    const selectedGender = document.querySelector('input[name=gender]:checked');


    // if(selectedGender){
    //     console.log(selectedGender.value);
    // }else{
    //     console.log("no option selected")
    // }

    let checkedBoxes = document.querySelectorAll('input[name=skills]:checked');
    console.log(checkedBoxes);

    let checkedValues = [];

    checkedBoxes.forEach(item=>{
        checkedValues.push(item.value)
    })

    console.log(checkedValues)




// let textElement =  document.querySelector("#textElement").value.trim();
//     let numberElement =  document.querySelector("#numberElement").value.trim();
//     let emailElement =  document.querySelector("#emailElement").value.trim();
//     let passwordElement =  document.querySelector("#passwordElement").value.trim();
//     let confirmPasswordElement =  document.querySelector("#confirmPasswordElement").value.trim();


    // textElement.value = "asdasd";
    // console.log("textElement.value", textElement.value)
    let textElementHTML = document.querySelector("#textElement")
    textElementHTML.value = "" 

    




})