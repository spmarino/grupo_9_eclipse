let cerrar = document.querySelectorAll(".close2")[0];
let aceptar = document.querySelectorAll(".acept")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let cerrar2 = document.querySelectorAll(".close22")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];


addEventListener("load", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

aceptar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    setTimeout(function(){

    },850)
})

cerrar.addEventListener("click", function () {
    
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close22");
    modal.classList.toggle("modal-close");


})



/*Original sin modal 2*/




/*let cerrar = document.querySelectorAll(".close2")[0];

let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


addEventListener("load", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    setTimeout(function(){

    },850)
})

window.addEventListener("click", function(e){
   
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        setTimeout(function(){
    
        },900)
    }
})

*/