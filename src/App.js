import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <body class="bg-indigo-200">
     <div className="App">
      <h1 class="font-serif text-4xl">BIOGRAFIA</h1>
     </div>
     <div className="App">
      <h3 class="font-serif text-4xl">Jorge Alvarenga --- Ingenieria en Informatica</h3>
      <div>
        <a href='https://www.facebook.com/jorge.alvarenga.7549/'><button class="bg-indigo-500 rounded mx-8 my-8 text-2xl p-4 text-white"><img class="height h-24" src='https://cdn.icon-icons.com/icons2/2657/PNG/256/facebook_icon_161067.png'></img> Facebook </button></a>
        <a href='https://www.youtube.com/channel/UCZTlN21_DixbwjR555XwaHA'><button class="bg-indigo-500 rounded mx-8 my-8 text-2xl p-4 text-white"><img class="height h-24" src='https://cdn.icon-icons.com/icons2/1488/PNG/512/5295-youtube-i_102568.png'></img> Youtube </button></a>
        <a href='https://www.instagram.com/alvacan57/'><button class="bg-indigo-500 rounded mx-8 my-8 text-2xl p-4 text-white"><img class="height h-24" src='https://cdn.icon-icons.com/icons2/836/PNG/128/Instagram_icon-icons.com_66804.png'></img> Instagram </button></a>
      </div>
     </div>
     <div class="ml-14">
     <table class="border-collapse border border-slate-400 border-gray-600/100 h-[20rem] w-[100rem]">
        <caption class="font-bold text-2xl underline">DESCRIPCIÓN GENERAL</caption>
        <tbody>
          <tr>
            <td class="border border-slate-400"> <img class="height h-64 width w-80" src='../1.jpg'></img></td>
            <td class="text-justify border border-slate-400 font-bold italic text-2xl"><p>•	Soy un joven hondureño, tengo 25 años de edad, nací el 18 de octubre de 1996 
              en la ciudad de San Pedro Sula, actualmente soy especialista de compras en Gildan,
              empresa importante de la industria manufacturera en la zona norte del país. 
              Si me quieren contactar pueden hacerlo a la siguiente dirección electrónica: 
              alvacan57@gmail.com</p></td>
          </tr>
          <tr>
            <td class="text-center border border-slate-400 font-bold text-2xl"><p>Habilidades</p></td>
            <td class="border border-slate-400 font-bold italic text-2xl"><p>• Exprecion oral y escrita, programacion, resolucion de problemas, trabajo fundamentado al servicio, atencion al cliente, Responsable y organizado</p></td>
          </tr>
        </tbody>
      </table>
     </div>
     <br></br>
     <div>
       <h2 class="font-bold text-center text-2xl underline">FORMACIÓN ACADEMICA / EXPERIENCIA</h2>
       <p class="text-justify ml-14 mr-20 font-bold italic text-2xl">•	Mi formación académica inicia en la escuela John F Kennedy en San Pedro Sula, 
         estudié mi colegio en el Centro Politécnico Alfa en Omoa e hice mi carrera de 
         técnico en computación con bachiller en Ciencias y Letras en el Colegio Oficial 
         Primero De Mayo de 1954 en San Pedro Sula. Actualmente estudio ingeniería en Informática 
         en Ceutec.</p>
         <br></br>
        <p class="text-justify ml-14 mr-20 font-bold italic text-2xl">• Mi experiencia laboral consiste en ser asistente de auditoria el cual fue mi primer empleo 
          en Indecasa empresa que me abrió las puertas para realizar mi practica profesional y luego me 
          contrato de forma permanente, luego fui solicitado en Etruch a donde me dieron el puesto de 
          asistente de operaciones y actualmente laboro como especialista de compras en Gildan 
          Honduras Properties.</p>
     </div>
     <br></br>
     <div>
       <h2 class="font-bold text-center text-2xl underline">TRABAJOS / SERVICIOS</h2>
       <p class="text-justify ml-14 mr-20 font-bold italic text-2xl">• Hoy en día cuento con una basta experiencia en las áreas administrativas en la empresa privada, 
       lo cual sumado a mis estudios en el área de tecnología y talento para la oratoria generan la combinación necesaria para ayudar en 
       puestos de análisis de datos, resolución de problemas y liderazgo de equipos.</p>
     </div>
     <br></br>
     <div class="ml-14">
     <table class="border-collapse border border-slate-400 border-gray-600/100 h-[20rem] w-[100rem]">
        <caption class="font-bold text-2xl underline">PROYECTOS</caption>
        <tbody>
          <tr>
            <td class="border border-slate-400"> <img class="height h-64 width w-80" src='../2.jpg'></img></td>
            <td class="text-justify border border-slate-400 font-bold italic text-2xl"><p>• REVENTUS: Consiste en la elaboración de una aplicación que administrara eventos.</p></td>
          </tr>
          <br></br>
          <tr>
            <td class="border border-slate-400"> <img class="height h-64 width w-80" src='../3.jpg'></img></td>
            <td class="text-justify border border-slate-400 font-bold italic text-2xl"><p>• DONACIÓN DE EQUIPO DE INFORMATICA JUZGADO DE PAZ: Un proyecto en el cual tratamos de apoyar con el equipo de trabajo a una entidad no privada 
            que necesitaba la ayuda urgentemente.</p></td>
          </tr>
          <br></br>
          <tr>
            <td class="border border-slate-400"> <img class="height h-64 width w-80" src='../4.jpg'></img></td>
            <td class="text-justify border border-slate-400 font-bold italic text-2xl"><p>• WRITART: Actualmente trabajo en WritArt proyecto que consiste en una plataforma web para escritores, será un sitio donde podrán mostrar su talento al mundo.</p></td>
          </tr>
        </tbody>
      </table>
     </div>
     <br></br>
     <div class="text-center font-bold">
     <h2 class="text-2xl underline">CONTACTAME</h2>
     <p>E-MAIL: alvacan57@gmail.com</p>
     <a href='https://www.instagram.com/alvacan57/'>INSTAGRAM: @alvacan57</a>
     <br></br>
     <a href='https://www.facebook.com/jorge.alvarenga.7549/'>FACEBOOK: Jorge Alvarenga</a>
     <br></br>
     <a href='https://www.youtube.com/channel/UCZTlN21_DixbwjR555XwaHA'>YOUTUBE: AlvacanTV</a>
     </div>
    </body>
  );
}
export default App;
