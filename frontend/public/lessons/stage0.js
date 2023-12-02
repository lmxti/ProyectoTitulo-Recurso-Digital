

import {codeStyle, variableStyle} from "./stagesStyle"
export const infoStage = { 
    nombre: "Introduccion",
    descripcion: "Para Empezar!",
    imagen: "/images/java-logo.png"
}


const lessonsStage0 = [
{
    id: 0,
    enunciado: (
      <div className=" text-black">
        <div className="flex justify-center">
          <img
            src="/images/lessons/stage1/Leccion1v2-img.jpg"
            alt="Leccion1-img"
          />
        </div>
      </div>
    ),
    instrucciones: (
      <div className=" text-black p-4">
        <p>
          Bienvenido a la primera lección de Java, aquí empezaras tu camino para
          aprender lo que es la programacion orientada a objetos (POO), el
          primer paso es comprender la sintaxis y funcionamiento basico de un
          programa.
        </p>
        <br />

        {/* <p>
          Como podrás observar, tienes cuatro ventanas que podrás utilizar para
          aprender (enunciado), escribir código (editor), seguir pasos
          (instrucciones) y ver el resultado de tu código (consola).
        </p> */}


        cuales podras utilizar para aprender y practicar los conceptos basicos de la programacion en Java.
        <ul className="list-disc p-4">
          <li>
              
          </li>
        </ul>





        {/* <ul className="list-disc p-4">
          <li> Pulsa el boton ejecutar que se encuentra en el compilador.</li>
          <li>
            Observa lo que se muestra en la consola, ¿Que mensaje aparece?.
          </li>
          <li>
            Prueba cambiando el texto que contiene{" "}
            <code style={codeStyle(0)}>System.out.println()</code>
            por otro como "Hola, mundo!" y vuelve a ejecutar el programa.
          </li>
        </ul> */}

        <p>
          Como podrás darte cuenta, la funcion{" "}
          <code style={codeStyle(0)}>System.out.println()</code> se utiliza para
          imprimir mensajes por consola
        </p>
      </div>
    ),
    checkResult: false,

    code: `

public class Main {
    public static void main(String[] args) {
        // Ejecuta este código para ver como funciona!
        System.out.println("Hello, World!");
    }
}

        `,
    isConsole: true,
  },
]


export default lessonsStage0;