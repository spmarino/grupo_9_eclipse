console.log('Js vinculado correctamente')


let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let regExDNI = /^[0-9]{8}$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;



const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastName');
const inputDate = document.getElementById('date');
const selectSex= document.getElementById('sex_id');

const inputEmail = document.getElementById('email');

const inputPassword = document.getElementById('password');
const inputPasswordCheck = document.getElementById('passwordCheck');





inputName.addEventListener('blur',()=>{
    switch (true) {
        case !inputName.value:
            errorName.innerHTML = "Debes ingresar tu nombre";
           
            break;
    
        default:
            errorName.innerHTML = ""
            break;
    }
});

inputLastName.addEventListener('blur',()=>{
    switch (true) {
        case !inputLastName.value:
            errorLastName.innerHTML = "Debes ingresar tu apellido"
            
            break;
    
        default:
            errorLastName.innerHTML = ""
            break;
    }
});

inputDate.addEventListener('blur',()=>{
    switch (true) {
        
        case !inputDate.value:
            errorDate.innerHTML = "Debes ingresar tu fecha de Nacimiento"
            
            break;

            case moment(inputDate.value)>moment():
                errorDate.innerHTML = "Fecha inválida";
                break;

            case moment().diff(moment(inputDate.value),'years')<18:
                errorDate.innerHTML = "Debes ser mayor de 18 años"

                       
            break;

            case moment().diff(moment(inputDate.value),'years')>110:
                errorDate.innerHTML = "Fecha inválida";
                break;
    
        default:
            errorDate.innerHTML = ""
            break;
    }
});



inputEmail.addEventListener('blur',()=>{
    switch (true) {
        case !inputEmail.value:
            errorEmail.innerHTML = "Debes ingresar tu dirección de email"
            
            break;

            case !regExEmail.test(inputEmail.value):
                errorEmail.innerHTML = "Debes escribir un email válido"

                break;
    
        default:
            errorEmail.innerHTML = ""
            break;
    }
});

    inputPasswordCheck.addEventListener('blur',()=>{
        switch (true) {
            case !inputPasswordCheck.value:
                errorPasswordCheck.innerHTML = "Debes reingresar una contraseña"
                
                break;

                case inputPasswordCheck.value != inputPassword.value:
                    errorPasswordCheck.innerHTML = "Las contraseñas no coinciden"
                    
                    break;
            default:
                errorPasswordCheck.innerHTML = ""
                break;
        }

    
});


inputPassword.addEventListener('blur',()=>{
    switch (true) {
        case !inputPassword.value:
            errorPassword.innerHTML = "Debes ingresar una contraseña"
            
            break;

            case !regExPass.test(inputPassword.value):
                errorPassword.innerHTML = "La contraseña debe contener 6 o más caracteres que contenga al menos un número, una letra minúscula y una letra mayúscula"

                break;
        default:
            errorPassword.innerHTML = ""
            break;
    }


});


