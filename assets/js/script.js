/*
************************
### GLOBAL VARIABLES ###
************************
*/


/*
************************
    ### FUNCTIONS ###
************************
*/
//Scope - Show plans and prices
{
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