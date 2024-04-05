
window.addEventListener('scroll', function() {
var navbar = document.getElementById('navbar');
var header = document.getElementById('header');
var dimtop;
if (window.scrollY > header.offsetHeight) {
navbar.style.top = '0';
navbar.style.position = 'fixed';
//this.alert(this.window.getComputedStyle(header).height);
} else {
dimtop = parseFloat(this.window.getComputedStyle(header).height)+15;
navbar.style.top = dimtop + 'px'; // Mueve el menú a su lugar en la pantalla si el usuario está arriba del header
navbar.style.position = 'absolute';
}
});
 function bottonDirections(direccion){
//window.location.href=direccion;
window.open(direccion, "_blank");
}

function mostrarPromedio(image, elemento){
    var imagen = document.getElementById(elemento);
  //  imagen.style.backgroundColor = "blue";
    imagen.setAttribute('src', image)
     
}
function mostrarSkills(idelemento){
for(var elemento in idelemento){
//alert(idelemento[elemento]);s
if(document.getElementById(idelemento[elemento]).hasAttribute('hidden')){
//alert(document.getElementById(idelemento[elemento]).hasAttribute('hidden'));
document.getElementById(idelemento[elemento]).removeAttribute('hidden');
}
else{
  document.getElementById(idelemento[elemento]).setAttribute('hidden', true);
}
}
}
function cambiarIdioma(idioma){
   // Obtener todos los elementos para traducir
   var el_h1 = document.querySelector('h1');//Titulo
   var el_section = document.querySelectorAll('h2');//Secciones encabezado
   var el_sobremi = document.getElementById('sobremi');//Sobre Mi p
   var el_navbar = document.querySelectorAll('a');//Elementos dentro del Navbar
   var el_phone = document.getElementById('phone');//Phone
   var el_project = document.querySelectorAll('.dproyecto');//Descripcion del proyecto
   if(idioma=="español" ){
    //Contenido cambia a idioma español
    //titulo
   if(el_h1.textContent=="My Programming Portfolio"){el_h1.textContent="Mi portafolio de programación";}
   //Secciones encbabezado
   el_section.forEach(function(sections) {
    if(sections.textContent=="About Me"){
       sections.textContent="Acerca de Mí";
     }
     else  if(sections.textContent=="My Skills"){
      sections.textContent="Mis Habilidades";
    }
    else if(sections.textContent=="Projects"){
      sections.textContent="Proyectos";
    }
    else if(sections.textContent=="Education"){
      sections.textContent="Educacion";
    }
    else if(sections.textContent=="Contact"){
      sections.textContent="Contacto";
    }
  });  
//Sobre mi
  el_sobremi.textContent = "Hola, soy Benardo Nijarec Gómez Rizo Ingeniero Informatico por la Universidad de Guadalajara un entusiata en el desarrollo de software de todo tipo, estoy listo para afrontar cualquier reto que se me presente y aprender cosas nuevas que el mundo del desarrollo de software, asimismo desarrollarme mejor como profesional.";
//Elementos dentro del Navbar
el_navbar.forEach(function(navbars) {
  if(navbars.textContent=="About Me"){
     navbars.textContent="Acerca de Mí";
   }
   else  if(navbars.textContent=="My Skills"){
    navbars.textContent="Mis Habilidades";
  }
  else if(navbars.textContent=="Projects"){
    navbars.textContent="Proyectos";
  }
  else if(navbars.textContent=="Education"){
    navbars.textContent="Educacion";
  }
  else if(navbars.textContent=="Contact"){
    navbars.textContent="Contacto";
  }
});
//Contact phone
el_phone.textContent = "Teléfono";
//Descripcion de los proyecto
el_project.forEach(function(projects){
  if(projects.textContent=="Program developed in Visual Basic, which encrypts texts through Caesar encryption."){
    projects.textContent = "Programa desarrollado en Visual Basic, que cifra textos mediante cifrado César.";
  }
  else if(projects.textContent=="Simple music player developed with Java in Android Studio."){
    projects.textContent = "Reproductor de música sencillo desarrollado con Java en Android Studio.";
  }
});
}
  
else if(idioma=="ingles"){
  //Contenido cambia a idioma ingles
  //titulo
if(el_h1.textContent=="Mi portafolio de programación"){el_h1.textContent="My Programming Portfolio";}
   //Secciones encbabezado
   el_section.forEach(function(sections) {
    if(sections.textContent=="Acerca de Mí"){
       sections.textContent="About Me";
     }
     else  if(sections.textContent=="Mis Habilidades"){
      sections.textContent="My Skills";
    }
    else if(sections.textContent=="Proyectos"){
      sections.textContent="Projects";
    }
    else if(sections.textContent=="Educacion"){
      sections.textContent="Education";
    }
    else if(sections.textContent=="Contacto"){
      sections.textContent="Contact";
    }
});
//Sobre mi
el_sobremi.textContent="Hello, I'm Benardo Nijarec Gómez Rizo, a Computer Engineer from the University of Guadalajara. I'm passionate about software development of all kinds, and I'm ready to face any challenge that comes my way and learn new things in the world of software development. Additionally, I aim to further develop myself as a professional.";
//elementos dentro del navbar
el_navbar.forEach(function(navbars) {
  if(navbars.textContent=="Acerca de Mí"){
     navbars.textContent="About Me";
   }
   else  if(navbars.textContent=="Mis Habilidades"){
    navbars.textContent="My Skills";
  }
  else if(navbars.textContent=="Proyectos"){
    navbars.textContent="Projects";
  }
  else if(navbars.textContent=="Educacion"){
    navbars.textContent="Education";
  }
  else if(navbars.textContent=="Contacto"){
    navbars.textContent="Contact";
  }
});
//Contact phone
el_phone.textContent = "Phone";
//Descripcion de los proyecto
el_project.forEach(function(projects){
  if(projects.textContent=="Programa desarrollado en Visual Basic, que cifra textos mediante cifrado César."){
    projects.textContent = "Program developed in Visual Basic, which encrypts texts through Caesar encryption.";
  }
  else if(projects.textContent=="Reproductor de música sencillo desarrollado con Java en Android Studio."){
    projects.textContent = "Simple music player developed with Java in Android Studio.";
  }
});
}

}

 

