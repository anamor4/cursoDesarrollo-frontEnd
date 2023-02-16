// DESCRIPCIÓN DEL DOCUMENTO:
// Documento JAVASCRIPT: CÓDIGO DEL EJERCICIO FINAL DEL CURSO DE DESARROLLO WEB FRONT-END 2022
// ¿Qué hace? procesa los datos incluidos en los inputs del formulario y validar el contenido 
//            de forma automática. Puntos clave a incluir: 
//            1. Marcar cuando los campos son correctos o incorrectos.
//            2. Cuando son erróneos, que salga un mensaje de error debajo de cada campo.
//            3. Alerta final cuando todos los campos son correctos y se envia el formulario.
// Autor: Ana Morales
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// DEFINICIÓN DE INPUTS, VARIABLES Y PARÁMETROS:

const formulario = document.getElementById('formulario'); //datos del formulario
const campos = document.querySelectorAll('#formulario input'); //datos de los campos

// Expresiones permitidas en cada campo para validar en el código:
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios.
	clave1: /^.{5,8}$/, // 5 a 8 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

//Constante grupo con los campos: si alguno es 'false' al enviar el 
//formulario, no se muestra la alerta final  
const grupos = {
    nombre: false,
    email: false,
    clave1: false,
    clave2: false
};

//FUNCIÓN PARA VALIDAR CAMPOS CUANDO SE ESCRIBE O SE ACTIVA UN CAMPO
//Con un 'switch' para validar en cada caso que se cumplen las condiciones especificadas
const validaCampos = (e) =>{
    switch(e.target.name){ 
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){ //si el valor del campo contiene las 'expresiones'
                document.getElementById('nombre--campo').classList.remove('formulario--campo_incorrecto'); //hace que desaparezca el icono rojo
                document.getElementById('nombre--campo').classList.add('formulario--campo_correcto'); //hace que aparezca el icono verde
                document.querySelector('#nombre--campo .error').classList.remove('error-ac'); //hace que desaparezca el mensaje dee error
                document.querySelector('#nombre--campo .error2').classList.remove('error2-ac');
                grupos['nombre'] = true;
            }else if(e.target.value ==""){ //si el campo está vacio da un error
                document.getElementById('nombre--campo').classList.add('formulario--campo_incorrecto'); //hace que aparezca el icono rojo
                document.getElementById('nombre--campo').classList.remove('formulario--campo_correcto'); //elimina el icono verde
                document.querySelector('#nombre--campo .error').classList.add('error-ac'); //hace que aparezca el mensaje de error 1
                document.querySelector('#nombre--campo .error2').classList.remove('error2-ac');
                grupos['nombre'] = false;
            }else{ //si no coincide con las condiciones anteriores da el error 2
                document.getElementById('nombre--campo').classList.add('formulario--campo_incorrecto'); 
                document.getElementById('nombre--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#nombre--campo .error').classList.remove('error-ac'); 
                document.querySelector('#nombre--campo .error2').classList.add('error2-ac'); //hace que aparezca el mensaje de error 2
                grupos['nombre'] = false;
            }
        break;
        case "email": //igual que con nombre, pero cambia el campo a 'email'
            if(expresiones.email.test(e.target.value)){ 
                document.getElementById('email--campo').classList.remove('formulario--campo_incorrecto');
                document.getElementById('email--campo').classList.add('formulario--campo_correcto'); 
                document.querySelector('#email--campo .error').classList.remove('error-ac'); 
                document.querySelector('#email--campo .error2').classList.remove('error2-ac');
                grupos['email'] = true;
            }else if(e.target.value ==""){ 
                document.getElementById('email--campo').classList.add('formulario--campo_incorrecto'); 
                document.getElementById('email--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#email--campo .error').classList.add('error-ac'); 
                document.querySelector('#email--campo .error2').classList.remove('error2-ac');
                grupos['email'] = false;
            }else{ //si no coincide con las condiciones anteriores da el error 2
                document.getElementById('email--campo').classList.add('formulario--campo_incorrecto'); 
                document.getElementById('email--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#email--campo .error').classList.remove('error-ac'); 
                document.querySelector('#email--campo .error2').classList.add('error2-ac'); 
                grupos['email'] = false;
            }
        break;
        case "clave1": //igual que con nombre, pero cambia el campo a 'clave'
            if(expresiones.clave1.test(e.target.value)){ 
                document.getElementById('clave1--campo').classList.remove('formulario--campo_incorrecto');
                document.getElementById('clave1--campo').classList.add('formulario--campo_correcto'); 
                document.querySelector('#clave1--campo .error').classList.remove('error-ac'); 
                document.querySelector('#clave1--campo .error2').classList.remove('error2-ac');
                grupos['clave1'] = true;
            }else if(e.target.value ==""){ 
                document.getElementById('clave1--campo').classList.add('formulario--campo_incorrecto'); 
                document.getElementById('clave1--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#clave1--campo .error').classList.add('error-ac'); 
                document.querySelector('#clave1--campo .error2').classList.remove('error2-ac');
                grupos['calve1'] = false;
            }else{ //si no coincide con las condiciones anteriores da el error 2
                document.getElementById('clave1--campo').classList.add('formulario--campo_incorrecto'); 
                document.getElementById('clave1--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#clave1--campo .error').classList.remove('error-ac'); 
                document.querySelector('#clave1--campo .error2').classList.add('error2-ac'); //hace que aparezca el mensaje de error 2
                grupos['clave1'] = false;
            }
        break;
        case "clave2": //La clave 2 debe validar que es igual a la clave 1
            const valorClave1 = document.getElementById('clave1'); //valor de la clave 1
            const valorClave2 = document.getElementById('clave2'); //valor de la clave 2
            if(valorClave1.value === valorClave2.value){ //es correcto si el valor 1 es igual al valor 2
                document.getElementById('clave2--campo').classList.remove('formulario--campo_incorrecto');
                document.getElementById('clave2--campo').classList.add('formulario--campo_correcto');
                document.querySelector('#clave2--campo .error').classList.remove('error-ac');
                document.querySelector('#clave2--campo .error2').classList.remove('error2-ac');  
                grupos['clave2'] = true;
            }else if(e.target.value ==""){  //si el campo está vacío, da error
                document.getElementById('clave2--campo').classList.add('formulario--campo_incorrecto');
                document.getElementById('clave2--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#clave2--campo .error').classList.add('error-ac');
                document.querySelector('#clave2--campo .error2').classList.remove('error2-ac');
                grupos['clave2'] = false;
            }else{ //si no cumple la condición de clave 1 = clave 2, da otro error
                document.getElementById('clave2--campo').classList.add('formulario--campo_incorrecto');
                document.getElementById('clave2--campo').classList.remove('formulario--campo_correcto');
                document.querySelector('#clave2--campo .error').classList.remove('error-ac');
                document.querySelector('#clave2--campo .error2').classList.add('error2-ac');
                grupos['clave2'] = false;
            }      
        break;
    }
};
//Aplica la función validaCampos a cada campo del formulario para:
//condicion de que lenvate una tecla (keyup) y cuando hace click fuera del formulario (blur)
campos.forEach((input)=>{
    input.addEventListener('keyup',validaCampos);
    input.addEventListener('blur',validaCampos); 
});

//FUNCIÓN PARA VALIDAR CAMPOS CUANDO LE DAMOS AL BOTÓN DE SUBMITIR
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    const valorNombre = document.getElementById('nombre');
    if(valorNombre.value === ""){ //si está vacío
        document.getElementById('nombre--campo').classList.add('formulario--campo_incorrecto');
        document.getElementById('nombre--campo').classList.remove('formulario--campo_correcto');
        document.querySelector('#nombre--campo .error').classList.add('error-ac');
        document.querySelector('#nombre--campo .error2').classList.remove('error2-ac');
    } else{
        document.getElementById('nombre--campo').classList.remove('formulario--campo_incorrecto');
        document.getElementById('nombre--campo').classList.add('formulario--campo_correcto');
        document.querySelector('#nombre--campo .error').classList.remove('error-ac');
        document.querySelector('#nombre--campo .error2').classList.remove('error2-ac');
    }
    const valorEmail = document.getElementById('email');
    if(valorEmail.value === ""){
        document.getElementById('email--campo').classList.add('formulario--campo_incorrecto'); 
        document.getElementById('email--campo').classList.remove('formulario--campo_correcto');
        document.querySelector('#email--campo .error').classList.add('error-ac'); 
        document.querySelector('#email--campo .error2').classList.remove('error2-ac');
    } else{
        document.getElementById('email--campo').classList.remove('formulario--campo_incorrecto');
        document.getElementById('email--campo').classList.add('formulario--campo_correcto');
        document.querySelector('#email--campo .error').classList.remove('error-ac');
        document.querySelector('#email--campo .error2').classList.remove('error2-ac');
    }
    const valorClave1 = document.getElementById('clave1');
    if(valorClave1.value === ""){
        document.getElementById('clave1--campo').classList.add('formulario--campo_incorrecto'); 
        document.getElementById('clave1--campo').classList.remove('formulario--campo_correcto');
        document.querySelector('#clave1--campo .error').classList.add('error-ac'); 
        document.querySelector('#clave1--campo .error2').classList.remove('error2-ac');
    } else{
        document.getElementById('clave1--campo').classList.remove('formulario--campo_incorrecto');
        document.getElementById('clave1--campo').classList.add('formulario--campo_correcto'); 
        document.querySelector('#clave1--campo .error').classList.remove('error-ac'); 
        document.querySelector('#clave1--campo .error2').classList.remove('error2-ac');
    }
    const valorClave2 = document.getElementById('clave2');
    if(valorClave2.value === ""){
        document.getElementById('clave2--campo').classList.add('formulario--campo_incorrecto');
        document.getElementById('clave2--campo').classList.remove('formulario--campo_correcto');
        document.querySelector('#clave2--campo .error').classList.add('error-ac');
        document.querySelector('#clave2--campo .error2').classList.remove('error2-ac');
    } else{
        document.getElementById('clave2--campo').classList.remove('formulario--campo_incorrecto');
        document.getElementById('clave2--campo').classList.add('formulario--campo_correcto');
        document.querySelector('#clave2--campo .error').classList.remove('error-ac');
        document.querySelector('#clave2--campo .error2').classList.remove('error2-ac');  
    }

    //Si todos los campos son correctos muestra una alerta de que la inscripción se ha realizado
    if(grupos.nombre && grupos.email && grupos.clave1 && grupos.clave2){
        alert("La inscripción ha sido correcta");
    }
});
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// FINAL DEL CÓDIGO