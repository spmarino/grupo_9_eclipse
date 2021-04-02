let cerrar = document.querySelectorAll(".close2")[0];
let aceptar = document.querySelectorAll(".acept")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


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
    setTimeout(function () {

    }, 850)
})

aceptar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
    }, 850)
})



/*window.addEventListener("click", function(e){

    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        setTimeout(function(){

        },900)
    }
})*/