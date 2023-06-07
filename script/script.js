let myForm=document.getElementById('form')
myForm.addEventListener('submit',function(e){
    e.preventDefault()


 let inputfieldel=document.getElementById('element')
 let element=inputfieldel.value
 

 let newElement=document.createElement('div')
 newElement.classList.add('newElement')

 newElement.innerHTML=`
<li>${element}</li> 
<button>ELIMINA</button>
 `
const emptyD=document.getElementById('empty-div')
 emptyD.appendChild(newElement)



 let allButton=document.querySelectorAll('.newElement button')
 allButton.forEach((button)=>{
    button.addEventListener('click', function(e) {
        let buttonIHaveC=e.target
        let liToRemove=buttonIHaveC.parentElement
        liToRemove.remove()
     })

   
    })
    
    
    inputfieldel.value=''
    

    })


 
    
    

