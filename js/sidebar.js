//js for the side bar 
let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let searchbtn = document.querySelector(".fa-magnifying-glass")
btn.onclick = function(){
    sidebar.classList.toggle("active")
}
searchbtn.onclick = function(){
    sidebar.classList.toggle("active")
}
let btn2 =document.querySelector("#btn2")
btn2.onclick = function(){
    sidebar.classList.toggle("active")
}
// js for the champions button
let champsbtn = document.querySelector("#champs")
let testing =false
function color(){
    if(testing){
    champsbtn.style.color = "#3273fa"
    champsbtn.style.borderBottom = "2px solid #3273fa"
    }  else{
        champsbtn.style.color ="#fff"
        champsbtn.style.borderBottom = "2px solid #fff"
    }
    testing=!testing
}
champsbtn.onclick = color



