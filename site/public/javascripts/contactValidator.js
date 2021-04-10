console.log('Js vinculado correctamente')


let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
         let regExTel= /^\d{10}$/;


const formContact = document.getElementById('formContact');
const inputName = document.getElementById('name');
const selectMatterId = document.getElementById('matter_id');
const inputMail = document.getElementById('mail');
const inputTel= document.getElementById('tel');
const textMessage = document.getElementById('message');





inputName.addEventListener('blur',()=>{
    switch (true) {
        case !inputName.value:
            errorNameContact.innerHTML = "Debes ingresar tu nombre"
                    
            break;
    
        default:
            errorNameContact.innerHTML = ""
            break;
    }
});

selectMatterId.addEventListener('blur',()=>{
    switch (true) {
        case !selectMatterId.value:
            errorMatterContact.innerHTML = "Debes seleccionar una opción"
            
            break;
    
        default:
            errorMatterContact.innerHTML = ""
            break;
    }
});

inputTel.addEventListener('blur',()=>{
    switch (true) {
        
        case !inputTel.value:
            errorTelContact.innerHTML = "Debes ingresar un número para contactarte"
            
            break;

            case !regExTel.test(inputTel.value):
                errorTelContact.innerHTML = "Debes escribir un número de teléfono válido"

                break;
         
        default:
            errorTelContact.innerHTML = ""
            break;
    }
});


inputMail.addEventListener('blur',()=>{
    switch (true) {
        case !inputMail.value:
            errorMailContact.innerHTML = "Debes ingresar tu dirección de email"
            
            break;

            case !regExEmail.test(inputMail.value):
                errorMailContact.innerHTML = "Debes escribir un email válido"

                break;
    
        default:
            errorMailContact.innerHTML = ""
            break;
    }
});

    textMessage.addEventListener('blur',()=>{
        switch (true) {
                       case !textMessage.value:
                errorMessageContact.innerHTML = "Debes escribir un mensaje"
                
                break;

                case textMessage.value.length<= 49:
                    errorMessageContact.innerHTML = "Debe escribir al menos 50 caracteres"
                    
                    break;
            default:
                errorMessageContact.innerHTML = ""
                break;
        }

    
});

