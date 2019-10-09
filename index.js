//Funcionalidad del boton para agregar al carrito
const cardButton = document.getElementById('addToCar');
cardButton.addEventListener('click', function (){
     var bk_event_handler_pixel = new Image();
     bk_event_handler_pixel.src="https://stags.bluekai.com/site/siteID?phint=event%3DAddToCar";
     console.log("one was clicked");
 })
 
 //Funcionalidad para cachar y enviar los phint del formulario.

  function submitForm() { }
    const form = document.getElementById('myform');
    form.addEventListener('submit', function () {
        event.preventDefault();

        let phone = document.getElementById('number').value;
        let email = document.getElementById('email').value;
        
        if(email && phone){
            console.log (`${phone} ${email}`);
            bk_addEmailHash(email);
            bk_addPhoneHash(phone);
            bk_doJSTag(251418, 1);
        }else {
            alert("Informaciòn incorrecta")
        }
    });