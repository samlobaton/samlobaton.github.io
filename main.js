let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor:"<span style='color: #006196;'>|</span>", //para cambiar el color al cursor
});
 
typewriter
  .pauseFor(2500) 
  .typeString('<span style="color: #006196;">Estudiante de física pura. Trabajo en investigación, enseñanza, desarrollo de programas para análisis de datos y páginas web.</span>') //con la etiqueta span cambiaremos el color
  .pauseFor(200)
  .deleteChars(10)
  .start();
