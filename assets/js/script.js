/*
************************
### GLOBAL VARIABLES ###
************************
*/

var timeout;
var form = document.getElementById('form')
var fullName = document.getElementById('fullName')
var email = document.getElementById('email')
var age = document.getElementById('age')
var subject = document.getElementById('subject')
var message = document.getElementById('message')

/*
/************************
  ### DROPDOWN MENU ###
************************
*/

function myFunction() // opens the dropdown menu with links
{
  document.getElementById("drop-ots-content").classList.toggle("show");
}

window.onclick = function(e) // closes then dropdown when the user clicks outside menu
{
  if (!e.target.matches('.ots-button')) {
  var myDropdown = document.getElementById("drop-ots-content");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function formError(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector('small')
  small.innerText = message
  formControl.className = 'form-control error'
}

function formSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function clearForm(){
  alert("Thanks for contacting us. Your form has been sent successfully.")
  formControl = fullName.parentElement;
  formControl.className = 'form-control clear'
  formControl = email.parentElement;
  formControl.className = 'form-control clear'
  formControl = age.parentElement;
  formControl.className = 'form-control clear'
  formControl = subject.parentElement;
  formControl.className = 'form-control clear'
  formControl = message.parentElement;
  formControl.className = 'form-control clear'
  document.getElementById('form').value='';
  document.getElementById('fullName').value='';
  document.getElementById('email').value='';
  document.getElementById('age').value='';
  document.getElementById('subject').value='';
  document.getElementById('message').value='';
  sum = 0;
}

/*
************************
  ### CONTACT MENU ###
************************
*/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() 
{
  let sum = 0;
  let fullNameValue = fullName.value.trim()
  let emailValue = email.value.trim()
  let ageValue = age.value.trim()
  let subjectValue = subject.value.trim()
  let messageValue = message.value.trim()
  
  if(fullNameValue === '') {
    formError(fullName, 'Please fill in this field') // show error and change to erro class
  }  
  else {
    formSuccess(fullName) // change to success class
    sum ++;
  }
  
  if(emailValue === '') {
    formError(email, 'Please fill in this field') // show error and change to erro class
  }
  else {
    formSuccess(email) // change to success class
    sum ++;
  }
  
  if(ageValue === '') {
    formError(age, 'Please fill in this field') // show error and change to erro class
  }
  else if(ageValue < 18) { 
    formError(age, 'You must be 18 years or older to contact us.')
  } 
  else {
    formSuccess(age) // change to success class
    sum ++;
  }
  
  if(subjectValue === '') {
    formError(subject, 'Please fill in this field') // show error and change to erro class
  }
  else {
    formSuccess(subject) // change to success class
    sum ++;
  }
  
  if(messageValue === '') {
    formError(message, 'Please fill in this field') // show error and change to erro class
  }
  else {
    formSuccess(message) // change to success class
    sum ++;
  }

  if (sum === 5){
    // 200 mseconds delay
    timeout = setTimeout(function(){
      clearForm();
    }, 200);
  }

  

}


/*
************************
### SHOW PLANS AND PRICES ###
************************
*/
{//Monitor each service and show or hide plans and prices when the button is pressed.
    for(let i=1; i <= 3; i++)
    {
        document.querySelector(`input[name=service-0${i}]`)
        .addEventListener('click', ()=>{
        
            let toggleButton = document.querySelector(`input[name=service-0${i}]`)
            let togglePlan = document.getElementById(`service-0${i}-plan-wrap`)
            
            if (togglePlan.style.display === 'flex') 
            {    
                togglePlan.style.display = 'none'
                toggleButton.value = 'Show'
            } 
            else 
            {
                togglePlan.style.display = 'flex'
                toggleButton.value = 'Hide'
            }
        })
    }
}

/*
************************
  ### BUY NOW ###
************************
*/
{//Simulate the residential purchase after press the button.
  for(let i=1; i<=3; i++)
  {
    for(let j=1; j<=3; j++){
      document.querySelector(`input[name=service${i}-0${j}-buy]`)
      .addEventListener('click', ()=>{

        switch(j) {
          case 1:
            alert("Congrats! You bought a SINGLE service!");
            break;

          case 2:
            alert("Congrats! You bought a MONTHLY service!");
            break;

            case 3:
              alert("Congrats! You bought a ANNUAL service!");
              break;
          default:
        }
      })
    }
  }
}

/*
************************
  ### FOOTER ###
************************
*/

function showTel(){
  alert("Thank you for reaching out!");
}
