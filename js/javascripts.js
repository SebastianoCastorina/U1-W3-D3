let addForm = document.getElementById ('form')
addForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let coseDaFare = document.getElementById ('lista')
    let retrieveCoseDaFare = coseDaFare.value
         let  nuovaTask = retrieveCoseDaFare
    let newDiv = document.createElement('p')
    let newContainer = document.createElement('div')
    newContainer.classList.add('container')
    newDiv.classList.add('newP')
    newDiv.innerHTML=`
<p class="par"> ${nuovaTask}</p>
<button class="eliminaButton"> ELIMINA</button>
`

let myList = document.getElementById('list')
myList.appendChild(newContainer)
 newContainer.appendChild(newDiv)
 
 const deleteButton = document.querySelectorAll ('.eliminaButton')
 deleteButton.forEach ( (button) =>{
     button.addEventListener ('click', function (e){
     
         e.target.parentElement.parentElement.remove()
 
     })
     coseDaFare.value = ' '
 })
 const sbarro = document.querySelectorAll('.par')
sbarro.forEach( p => {
   p.addEventListener('click', () =>{
       par.style.textDecorationLine = "line-through"
   })
}
) 

})


