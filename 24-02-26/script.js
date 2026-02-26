let registrationForm = document.querySelector('#registrationForm');


let result = [];

registrationForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let obj = {};
    
    let fullName = document.querySelector('#fullName');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let age = document.querySelector('#age');
    let radioComponent = document.querySelector('input[name="gender"]:checked');
    let course = document.querySelector('#course');
    let checkComponent = document.querySelectorAll('input[name="skills"]:checked');
    let checkedValues = [];



    


    function functionStack(){
        checkFullName();
        checkEmail();
        checkPhone();
        checkAge();
        checkGender();
        checkCourse();
        checkSkills();
        result.push(obj);
        console.log(result)
        makeTable();

    }
    functionStack();


    function makeTable(){
        let tbody = document.querySelector('#studentsTableBody');
        tbody.innerHTML='';
        
        result.map((item, index)=>{
            let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.innerText = index +1 ;
            
            let td2 = document.createElement('td');
            td2.innerText = item.fullName ;

            let td3 = document.createElement('td');
            td3.innerText = item.email ;
        
            let td4 = document.createElement('td');
            td4.innerText = item.phone ;
         
            let td5 = document.createElement('td');
            td5.innerText = item.gender ;

            let td6 = document.createElement('td');
            td6.innerText = item.course ;

            let td7 = document.createElement('td');
            td7.innerText = item.age ;


            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            tr.appendChild(td7)

            tbody.appendChild(tr)



        })


     




    }

    
    function checkFullName(){
        let nameError = document.querySelector('#nameError');
        if(fullName.value == ''){
            nameError.style.display='block'
            fullName.focus();
        }else{
            nameError.style.display='none'
            obj.fullName = fullName.value;
        }
    }


    function checkEmail(){
        let emailError = document.querySelector('#emailError');
        let emailValue = email.value;
        if(email.value == ''){
            emailError.style.display='block'
            email.focus();
        }else if(!emailValue.includes('@') || !emailValue.includes('.')){
            emailError.style.display='block'
            email.focus();
        }else{
            emailError.style.display='none';
            obj.email = email.value;
        }
    }


    function checkPhone(){
        let phoneError = document.querySelector('#phoneError');

        if(phone.value == ''){
            phoneError.style.display='block'
            phone.focus();
        }else if(phone.value.length !== 10){
            phoneError.style.display='block'
            phone.focus();
        }else{
            phoneError.style.display='none'
            obj.phone = phone.value;

        }
    }


    function checkAge(){
        let ageError = document.querySelector('#ageError');
        let ageValue = parseInt(age.value);

        if(ageValue == NaN){
            ageError.style.display='block'
            age.focus();
        }else if(ageValue>16 && ageValue<60 ){
            ageError.style.display='none'
            obj.age = ageValue;
        }
    }



    function checkGender(){
        let genderError = document.querySelector('#genderError')
        if(!radioComponent){
            genderError.style.display='block'
        }else{
            genderError.style.display='none'
            obj.gender = radioComponent.value;
        }
    }


    function checkCourse(){
        let courseError = document.querySelector('#courseError')
        console.log(course.value);
        if(course.value ==""){
            courseError.style.display='block'
            course.focus();
        }else{
            courseError.style.display='none'
            obj.course = course.value

        }
    }


    function checkSkills(){

        let skillError = document.querySelector('#skillError')

        checkComponent.forEach(item=>checkedValues.push(item));

        if(checkComponent.length == 0){
            skillError.style.display='block'
        }else{
            skillError.style.display='none'
            obj.skills = checkComponent
        }

    }
 


})