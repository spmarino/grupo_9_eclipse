console.log("se ha vinculado correctamente")

let lupa = document.querySelectorAll(".search-index-action")[0];
let buscador = document.querySelectorAll(".search-index")[0];


lupa.addEventListener("click", function () {
   setTimeout(function(){
    buscador.style.display = "block";
   },300) 
    
})

window.addEventListener("click", function(e){
   this.console.log(e.target)
   if(e.target == buscador){
    buscador.style.display = "none";
   }
    /*if(e.target == modalC){
        modal.classList.toggle("modal-close");
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        setTimeout(function(){
    
        },900)
    }*/
})