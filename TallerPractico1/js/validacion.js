var candidatoString = "<tr><td>Nombre del candidato</td><td>País de origen</td><td>Nacimiento</td><td>Celular</td><td>Tel. Casa</td><td>Correo</td></tr>";

    if(window.addEventListener){
        window.addEventListener("load", init, false);
    }else{
        window.attachEvent("onload", init);
    }
    function init(){
        
        const datosPersona = {
            nombrePersona : document.getElementById("nombrePersona"),
            apellidoPersona : document.getElementById("apellidoPersona"),
            paisNacimientoPersona: document.getElementById("paisNacimiento"),
            emailPersona : document.getElementById("emailPersona"),
            generoMasculinoPersona : document.getElementById("rdbMasculino").value,
            generoFemeninoPersona : document.getElementById("rdbFemenino").value,
            fechaNacimientoPersona : document.getElementById("fechaNacimiento"),
            paisResidenciaPersona: document.getElementById("paisResidencia"),
            departamentoResidenciaPersona : document.getElementById("departamentoResidencia"),
            telefonoCasaPersona : document.getElementById("telefonoCasa"),
            telefonoCelularPersona : document.getElementById("telefonoCelular"),
            domicilioPersona : document.getElementById("domicilioPersona")
        }
        const datos = [];
        datos.push(datosPersona.nombrePersona);   

        btnSubmit = document.formulario.submit;
        btnSubmit.addEventListener("click", function(){
            var contenedor = document.getElementById("prueba");
            alert("HOla");
        }, false);
    }


    function validar(){
        var errores = document.getElementById("advertencias"); 
        var valueNombre = document.getElementById("nombrePersona").value;
            var valueApellido = document.getElementById("apellidoPersona").value;
            var valueEmail = document.getElementById("emailPersona").value;
            var valueTelefonoCasa = document.getElementById("telefonoCasa").value;
            var valueCelular = document.getElementById("telefonoCelular").value;
            var valueDomicilio = document.getElementById("domicilioPersona").value;
            if(valueNombre === "" || valueApellido === "" || valueEmail === "" || valueTelefonoCasa === "" || valueCelular === "" || valueDomicilio === ""){
                alert("Rellenar campos")
            }else{
                alert("Datos rellenados");
            }
    }
    function showChar(e){
        var code;
        if (!e) var e = window.event;
    
        //Dependiendo de la version de los navegadores se va a poder usar cualquiera de las dos
        //POr eso es la razon por la cual se posicionan dos alternativas de interpretar los caracteres
        //Ya sea con .keycode o con .which
        if (e.keyCode) code = e.keyCode; //Todos los navegadores menos Netscape 4.0 o
        else if (e.which) code = e.which; //Netscape 4.0 o inferior
        var character = String.fromCharCode(code);
        //alert('La tecla presionada fue: ' + character);
        }
    function numbersOnly(field, event){
        //alert(field.value);
        var key, keychar;
        showChar(event); //Mostrar la tecla presionada
        if(window.event) //Todos los navegadores menos Netscape 4.0 o inferior
        key = window.event.keyCode;
        else if(event) //Netscape 4.0 o inferior
        key = event.which;
        else
        return true;
        keychar = String.fromCharCode(key);
        // Comprobar caracteres especiales como espacio en blanco
        // luego comprobar números
        if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) ||
        (key ==
        27))
        return true;
        else if((("0123456789").indexOf(keychar) > -1)){
        window.status = "";
        return true;
        }
        else{
        window.status = "Este campo solo acepta números";
        return false;
        }
    }

        function finish(){
    candidatoString += "<tr><td>" + document.getElementById("nombrePersona").value + " " + document.getElementById("apellidoPersona").value + "</td>";
    candidatoString += "<td>" + document.getElementById("paisNacimiento").value + "</td><td>" + document.getElementById("fechaNacimiento").value + "</td>";
    candidatoString += "<td>" + document.getElementById("telefonoCelular").value + "</td><td>" + document.getElementById("telefonoCasa").value + "</td><td>" + document.getElementById("emailPersona").value + "</td>" ;

    document.getElementById('candidatos').innerHTML = candidatoString;
    
   document.getElementById('table').style.visibility = "visible"


}