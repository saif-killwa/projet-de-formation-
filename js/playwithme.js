//form display with button click
let edit = document.querySelector("#edit")
let form = document.querySelector(".edit-profile")
let advertisement = document.querySelector(".advertisement")

edit.addEventListener('click', function(){
    form.style.display = "flex"
    advertisement.style.display = "none"
})


// inputs form display


// div edit variables
let editbtn = document.querySelector("#edit-btn")
let contactMe = document.querySelector("#contact-me")
let description = document.querySelector("#description")
let inputName = document.querySelector("#name")

//checkbox
//game mode
let checkboxes = document.querySelectorAll(".checkbox")
var listarry1 =[]
for(var checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked == true){
            listarry1.push(this.value)
            mode.innerHTML= listarry1.join(' / ')
        }
    })
}
//main role
let checkboxes2 =document.querySelectorAll(".checkbox2")
for(var checkbox2 of checkboxes2){
    checkbox2.addEventListener('click',function(){
        if(this.checked == true){
            if (this.value == 'top') {
                roleCard.innerHTML = '<img src="img/Position_Challenger-Top.png">'
            }
            else if (this.value == 'jungler') {
                roleCard.innerHTML = '<img src="img/Position_Challenger-Jungle.png">'
            }
            else if (this.value == 'mid') {
                roleCard.innerHTML = '<img src="img/Position_Challenger-Mid.png">'
            }
            else if (this.value == 'bottline') {
                roleCard.innerHTML = '<img src="img/Position_Challenger-Bot.png">'
            }
            else if (this.value == 'support') {
                roleCard.innerHTML = '<img src="img/Position_Challenger-Support.png">'
            }
        }
    })
}



// div card-name variables
let cardregion = document.querySelector("#region")
let lang = document.querySelector("#language")
let rankingSolo =document.querySelector("#ranking-solo")
let rankingFlex =document.querySelector("#ranking-flex")
let cardContactme = document.querySelector("#card-contactme")
let descrCard =document.querySelector("#descr-card")
let mode = document.querySelector("#mode")
let roleCard =document.querySelector("#role-card")
let newcard =document.querySelector("#newcard")
let yourname = document.querySelector("#yourname")

function getFlexValue(){
    let flex = document.querySelector("#list-flex").value
    console.log(flex)
    return rankingFlex.innerHTML = flex
}
function getSoloValue(){
    let SOLOQUE = document.querySelector("#list-SOLOQUE").value
    console.log(SOLOQUE)
    return rankingSolo.innerHTML = SOLOQUE
}

function getLanguageValue(){
    let language = document.querySelector("#list-language").value
    console.log(language)
    return lang.innerHTML = language
}
function getRegionValue(){
   var region = document.querySelector("#list-region").value
   console.log(region)
   return cardregion.innerHTML = region
}


editbtn.addEventListener('click', function(){
    getRegionValue()
    getLanguageValue()
    getSoloValue()
    getFlexValue()
    yourname.innerHTML = inputName.value
    cardContactme.innerHTML = contactMe.value
    descrCard.innerHTML = description.value
    form.style.display = "none"
    newcard.style.display = "flex"
})



