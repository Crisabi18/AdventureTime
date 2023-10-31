if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function (registration) {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch(function (error) {
        console.log("Error al registrar el Service Worker:", error);
      });
    }


const nombrePersonajes = document.getElementById("personajes");
const personaje = document.getElementById("imgPersonaje");
let descripcion = document.getElementById("descripcion")
const body = document.getElementById("card");
let versiones = document.getElementById("versiones")
const title = document.getElementById("title")
let personaje2;
let opcion;
let opcion1;


personaje.addEventListener("click", ()=>{
  
  
  location.href = "interfaz3.html?desc="+descripcion+"&personaje2="+personaje2+"&nombre="+opcion1;
  
  
  })


nombrePersonajes.addEventListener(
  "change",
  function () {
    switch (this.value) {
      case "Finn el humano":
        opcion = nombrePersonajes.lastChild.parentElement[1].innerHTML;
        personaje.src = "assets/img/p1.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        // //
         // Ocultar las opciones 
         for (let i = 4; i < 22; i++) {
          versiones.options[i].style.display = "none";
      }

      // Mostrar las opciones 
      for (let i = 0; i < 4; i++) {
          versiones.options[i].style.display = "block";
      }
        break;
      case "Jake el perro":
        opcion = nombrePersonajes.lastChild.parentElement[2].innerHTML;
        personaje.src = "assets/img/p2.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 4; i++) {
          versiones.options[i].style.display = "none";
      }
        for (let i = 6; i < 22; i++) {
          versiones.options[i].style.display = "none";
      }

      // Mostrar las opciones 4, 5 y 6
      for (let i = 4; i < 6; i++) {
          versiones.options[i].style.display = "block";
      }
        break;
      case "BMO":
        opcion = nombrePersonajes.lastChild.parentElement[3].innerHTML;
        personaje.src = "assets/img/p3.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 6; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 8; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }

      // Mostrar las opciones 4, 5 y 6
      for (let i = 6; i < 8; i++) {
          versiones.options[i].style.display = "block";
      } 
        break;
      case "Rey helado":
        opcion = nombrePersonajes.lastChild.parentElement[4].innerHTML;
        personaje.src = "assets/img/p4.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 8; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 10; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 8; i < 10; i++) {
          versiones.options[i].style.display = "block";
      } 
        break;
      case "Dulce princesa":
        opcion = nombrePersonajes.lastChild.parentElement[5].innerHTML;
        personaje.src = "assets/img/p5.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        // 
        for (let i = 0; i < 10; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 12; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 10; i < 12; i++) {
          versiones.options[i].style.display = "block";
      }
        break;
      case "Marceline":
        opcion = nombrePersonajes.lastChild.parentElement[6].innerHTML;
        personaje.src = "assets/img/p6.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 12; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 14; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 12; i < 14; i++) {
          versiones.options[i].style.display = "block";
      } 
        break;
      case "Princesa flama":
        opcion = nombrePersonajes.lastChild.parentElement[7].innerHTML;
        personaje.src = "assets/img/p7.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        // 
        for (let i = 0; i < 14; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 16; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 14; i < 16; i++) {
          versiones.options[i].style.display = "block";
      }
        break;
      case "Princesa grumosa":
        opcion = nombrePersonajes.lastChild.parentElement[8].innerHTML;
        personaje.src = "assets/img/p8.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 16; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 18; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 16; i < 18; i++) {
          versiones.options[i].style.display = "block";
      } 
        break;
      case "Conde limón agrio":
        opcion = nombrePersonajes.lastChild.parentElement[9].innerHTML;
        personaje.src = "assets/img/p9.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 18; i++) {
          versiones.options[i].style.display = "none";
      }
      for (let i = 20; i < 22; i++) {
        versiones.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 18; i < 20; i++) {
          versiones.options[i].style.display = "block";
      }
        break;
      case "El litch":
        opcion = nombrePersonajes.lastChild.parentElement[10].innerHTML;
        personaje.src = "assets/img/p10.jpg";
        versiones.removeAttribute("disabled");
        versiones.innerHTML = versiones.innerHTML;
        // descripcion.innerHTML = "";
        //
        for (let i = 0; i < 20; i++) {
          versiones.options[i].style.display = "none";
      }
     
      // Mostrar las opciones 4, 5 y 6
      for (let i = 20; i < 22; i++) {
          versiones.options[i].style.display = "block";
      } 
        break;
      
    }

    versiones.addEventListener("change", function(){
      switch (this.value) {
        case "f1":
          opcion1 = versiones.lastChild.parentElement[1].innerHTML;
          personaje.src = "assets/img/p1.jpg";
          personaje2 = "assets/img/fionna.jpg";
          descripcion = "Version femenina de Finn.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "60px";
          // title.style.display = "none";
          break;
        case "f2":
          opcion1 = versiones.lastChild.parentElement[2].innerHTML;
          personaje.src = "assets/img/p1.jpg";
          personaje2 = "assets/img/fern.jpg";
          descripcion = " Finn del pasado fue convertido en Finn espada pero la maldición de pasto lo convirtió en Fern así que Fern";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "60px";
          // title.style.display = "none";
          break;
        case "f3":
          opcion1 = versiones.lastChild.parentElement[3].innerHTML;
          personaje.src = "assets/img/p1.jpg";
          personaje2 = "assets/img/finnLobo.webp";
          descripcion = "Finn fue abrazado por un Lobo Apapacho en una noche de luna llena, transformándolo en uno de ellos. Su aspecto cambia drásticamente, al igual que sus deseos de abrazar a las personas.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "j1":
          opcion1 = versiones.lastChild.parentElement[4].innerHTML;
          personaje.src = "assets/img/p2.jpg";
          personaje2 = "assets/img/jake mago.jpg";
          descripcion = "Jake consiguio poderes de Mago, tras superar las pruebas de Bufo.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "j2":
          opcion1 = versiones.lastChild.parentElement[5].innerHTML;
          personaje.src = "assets/img/p2.jpg";
          personaje2 = "assets/img/cake.jpg";
          descripcion = "Version femenina de Jake, es su version en un mundo paralelo donde todos los generos se invierten.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "b1":
          opcion1 = versiones.lastChild.parentElement[6].innerHTML;
          personaje.src = "assets/img/p3.jpg";
          personaje2 = "assets/img/Bmo1.jpg";
          descripcion = "BMO es como un niño pequeño y dado que le gusta jugar con cualquier cosa, aqui esta BMO Skater";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "b2":
          opcion1 = versiones.lastChild.parentElement[7].innerHTML;
          personaje.src = "assets/img/p3.jpg";
          personaje2 = "assets/img/Bmo2.jpg";
          descripcion = "A BMO le gusta hacer de todo, cualquier cosa que haria una persona normal la hace BMO, como salir bajo la lluvia aun siendo una consola";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "r1":
          opcion1 = versiones.lastChild.parentElement[8].innerHTML;
          personaje.src = "assets/img/p4.jpg";
          personaje2 = "assets/img/rey1.jpg";
          descripcion = "Versión femenina del Rey helado, es su version en un mundo paralelo donde todos los generos se invierten.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "r2":
          opcion1 = versiones.lastChild.parentElement[9].innerHTML;
          personaje.src = "assets/img/p4.jpg";
          personaje2 = "assets/img/rey2.jpg";
          descripcion = "En algún momento antes de la Guerra de los Champiñones, el Rey Helado era un humano normal, de piel aceitunada y cabello oscuro llamado Simon Petrikov.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "d1":
          opcion1 = versiones.lastChild.parentElement[10].innerHTML;
          personaje.src = "assets/img/p5.jpg";
          personaje2 = "assets/img/d1.jpg";
          descripcion = "Versión Masculina de la Dulce Princesa, es su version en un mundo paralelo donde todos los generos se invierten.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "d2":
          opcion1 = versiones.lastChild.parentElement[11].innerHTML;
          personaje.src = "assets/img/p5.jpg";
          personaje2 = "assets/img/d2.jpg";
          descripcion = "Hace 100 años, el Rey del Invierno logró librarse de la locura que le causaba la Corona del Rey Helado lanzándole una maldición a la Dulce Princesa. Sin embargo, esto resultó en que se transforma en la Dulce Reina, volviéndose loca y arruinando el Reino de los Dulces.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "m1":
          opcion1 = versiones.lastChild.parentElement[12].innerHTML;
          personaje.src = "assets/img/p6.jpg";
          personaje2 = "assets/img/m1.jpg";
          descripcion = "Versión masculina de Marceline, es su version en un mundo paralelo donde todos los generos se invierten. ";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "m2":
          opcion1 = versiones.lastChild.parentElement[13].innerHTML;
          personaje.src = "assets/img/p6.jpg";
          personaje2 = "assets/img/m2.jpg";
          descripcion = "Es una versión alterna malvada de Marceline en donde ella nunca fue criada por Simon Petrikov, dando como resultado que fuera adoptada por el Rey Vampiro, volviéndose una sádica asesina y una temida vampiresa entre la gente y los mismos vampiros. o.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "fl1":
          opcion1 = versiones.lastChild.parentElement[14].innerHTML;
          personaje.src = "assets/img/p7.jpg";
          personaje2 = "assets/img/fl1.jpg";
          descripcion = "Versión masculina de la princesa flama, es su version en un mundo paralelo donde todos los generos se invierten.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "fl2":
          opcion1 = versiones.lastChild.parentElement[15].innerHTML;
          personaje.src = "assets/img/p7.jpg";
          personaje2 = "assets/img/fl2.jpg";
          descripcion = "Es la version Humana de la Princesa Llama. Aparece por primera vez en el episodio Finn Murtons & El Lich.";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "g1":
          opcion1 = versiones.lastChild.parentElement[16].innerHTML;
          personaje.src = "assets/img/p8.jpg";
          personaje2 = "assets/img/grumoso.webp";
          descripcion = "Es la versión hombre de la princesa grumosa del universo alterno de hora de Aventura";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "g2":
          opcion1 = versiones.lastChild.parentElement[17].innerHTML;
          personaje.src = "assets/img/p8.jpg";
          personaje2 = "assets/img/grumosa3d.jpg";
          descripcion = "Es la version 3D de la princesa grumosa del capitulo 'Malas Vibras'";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "c1":
          opcion1 = versiones.lastChild.parentElement[18].innerHTML;
          personaje.src = "assets/img/p9.jpg";
          personaje2 = "assets/img/cabezalimon.jpg";
          descripcion = "hay diferentes criaturas que fueron hechas a partir de limon agrio y esta es una de esas formas de vida fallidas";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "c2":
          opcion1 = versiones.lastChild.parentElement[19].innerHTML;
          personaje.src = "assets/img/p9.jpg";
          personaje2 = "assets/img/limonclon.webp";
          descripcion = "Es un segundo limon agrio fromado de igual forma por la dulce princesa, este fue creado para hacerle compañia al solitario limon agrio";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "l1":
          opcion1 = versiones.lastChild.parentElement[20].innerHTML;
          personaje.src = "assets/img/p10.jpg";
          personaje2 = "assets/img/l1.webp";
          descripcion = "Cuando el Lich en forma del Caracol lee algunas páginas del Enchiridion en el sueño de Finn, recupera su antigua forma pero esta vez posee el cuerpo de  héroe Billy";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
        case "l2":
          opcion1 = versiones.lastChild.parentElement[21].innerHTML;
          personaje.src = "assets/img/p10.jpg";
          personaje2 = "assets/img/l2.webp";
          descripcion = "Aunque en realidad el Lich no existe en este universo, es creado específicamente por el deseo de que 'El Lich nunca jamás hubiera existido'. Cuando Finn Alterno destruye accidentalmente la bomba que el Rey Helado Alterno congeló";
          // body.style.background = "#ff4500 ";
          body.style.marginTop = "30px";
          // title.style.display = "none";
          break;
  
        default:
          break;
      }
     })

  },false);