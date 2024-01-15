import { codeStyle, valueStyle, variableStyle } from "./stagesStyle";

export const infoStage = {
  nombre: "Introduccion programación",
  descripcion: "Hola, mundo!. Inicia tu camino en el mundo de la programación.",
  imagen: "/images/lessons/stage1-P.jpg",
};

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
      <div className=" text-black p-4 text-justify">
          <p>En esta primera lección, nos sumergiremos en comprender la estructura básica y fundamental de un código Java.
            En la sección teórica, podrás profundizar en la estructura y el funcionamiento de este lenguaje de programación.
          </p>
          <br/>

          <p>
             Para comenzar:
          </p>

        <ul className="list-disc p-2" style={{ listStyleType: 'decimal'}}>
          <li>
            Pulsa el botón ejecutar que se encuentra en el editor de código.
          </li>
          <li>
          Observa lo que se muestra en la consola, ¿qué mensaje aparece?.
          </li>
          <li>
            Intenta cambiar el texto que contiene
            <code style={codeStyle(0)}>System.out.println(" ")</code>
            por otro como "Hola, mundo!" Y vuelve a ejecutar el programa.
          </li>
        </ul>

        <hr className="my-4"/>

        <p>
          <code style={codeStyle(0)}>System.out.println()</code>
          es una expresión que se utiliza para imprimir en la consola de Java, puedes utilizarla para imprimir desde:
        </p>
        <ul className="list-disc p-4">
          <li>
            Mensajes simples, como el de este ejercicio: <code style={valueStyle(0)}>"Hello, World!"</code>
          </li>
          <li>
            Valores numéricos, por ejemplo,  <code style={valueStyle(0)}>2750</code>
          </li>
          <li>
            Secuencias de caracteres (Strings) como:, <code style={valueStyle(0)}>"Hola mundo, 1234"</code>
          </li>
          <li>
            El valor de variables: <code style={variableStyle(0)}>nombre</code>
            (no te preocupes si aún no conoces qué es una variable; eso lo abordaremos en la siguiente lección).
          </li>
        </ul>
        <p>
          Es importante mencionar que al utilizarlo para imprimir texto, este debe ir entre comillas dobles (" ") o simples (' '),
          en caso de imprimir solo un valor numérico o el valor de una variable, no es necesario.
        </p>


        <hr className="my-4"/>

        <p>
          Por último, en el editor de código podrás encontrar comentarios, estos son líneas de texto que no se ejecutan,
          pero que sirven para explicar el funcionamiento del código, los podrás identificar por qué comienzan con <code style={codeStyle(0)}>//</code>
        </p>



      </div>
    ),
    checkResult: false,

    codeAnswer: `

public class Main {
    public static void main(String[] args) {
        // Woau!!!
        System.out.println("Aqui estara el codigo de ejemplo de respuesta posible");
        System.out.println("En caso de que seas incapaz de encontrar la solucion");
        
    }
}

        `,

    code: `

public class Main {
    public static void main(String[] args) {
        // Prueba ejecutar el codigo :)!
        System.out.println("Hello, World!");
    }
}

        `,
    isConsole: true,
  },
];

export default lessonsStage0;
