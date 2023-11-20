const codeStyle = (type) => {
  return {
    padding: "3px",
    fontStyle: "italic",
    borderRadius: "8px",
    fontSize: "14px",
    color:
      type == 0
        ? "var(--primary-color)"
        : type == 1
        ? "var(--text-color)"
        : "var(--secondary-color)",
    background: "var(--bg-color)",
  };
};

const variableStyle = (type) => {
  return {
    padding: "3px",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "16px",
    color:
      type == 0
        ? "var(--primary-color)"
        : type == 1
        ? "var(--text-color)"
        : "var(--secondary-color)",
  };
};

const lessonsStage1 = [
  //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
 
  // <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
  {
    id: 0,
    enunciado: (
      <div className=" text-black">
        <div className="flex justify-center">
          <img
            src="/images/lessons/stage1/Leccion2-img.jpg"
            alt="Leccion1-img"
          />
        </div>
      </div>
    ),
    instrucciones: (
      <div className=" text-black p-4">
        <p>
          En esta leccion, explorarás el concepcion de variables, aprenderás
          como se declaran y como se les asigna un valor, ademas de como
          imprimir su valor por consola.
        </p>
        <br />
        <p>
          En está ocasión, deberás mostrar por consola el número de horas que
          tiene un dia, sigue las siguientes instrucciones:
        </p>
        <ul className="list-disc p-4">
          <li>
            1. Declara una variable de tipo entero{" "}
            <code style={codeStyle(1)}>int</code> para almacenar la cantidad de
            horas, recuerda utilizar una convencion de nombre adecuada para que
            sea más descriptivo y facil de comprender (Camel Case, Snake Case,
            etc.)
          </li>
          <li>
            2. Asigna el valor correspondiente a la variable, puedes asignarle
            el valor en la misma declaracion (inicializacion en la misma linea)
            o puedes declarar la variable y asignarle el valor en otra linea.
          </li>
          <li>
            3. Imprime por consola el valor de la variable utilizando{" "}
            <code style={codeStyle(0)}>System.out.println()</code>, recuerda que
            para variables NO debes utilizar comillas ("") para imprimir valor.
          </li>
        </ul>
      </div>
    ),
    checkResult: false,
    code: `
        
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable
        int horasDia = 24;
        // Imprimir valor de variable
        System.out.println(horasDia);

    }
}


`,
    isConsole: true,
  },
  // <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
  {
    id: 1,
    enunciado: (
      <div className=" text-black">
          <img
            src="/images/lessons/stage1/Leccion3-img.jpg"
            alt="Leccion1-img"
          />
      </div>
    ),
    instrucciones: (
      <div className=" text-black p-4">
        <p>
          En el ejercicio anterior, aprendiste a declarar una variable,
          asignarle un valor e imprimir su valor por consola, pero ¿Qué como
          sabemos que significa el valor "24" que imprimimos por consola?, ¿Cómo
          podemos hacer para que sea más descriptivo y facil de comprender?
        </p>
        <br />
        <p>
          Para esto, se utiliza lo que se llama 'Concatenacion' que es la union
          de dos o mas cadenas de texto, en este caso, una cadena de texto y una
          variable.
        </p>
        <ul className="list-disc p-4">
          <li>
            1. Utiliza la funcion{" "}
            <code style={codeStyle(0)}>System.out.println()</code> para imprimir
            consola el mensaje "El dia tiene: ".
          </li>
          <li>
            2. Concatena o une el texto anterior con la variable que contiene el
            numero de horas.
          </li>
          <li>3. Concatena el texto anterior con el texto "horas",</li>
          <li>4. Ejecuta el programa y observa el resultado.</li>
        </ul>

        <br />

        <p>
          Recuerda utilizar los operadores correctos para concatenar texto y
          variables (+)
        </p>
      </div>
    ),
    checkResult: false,
    code: `
    
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable
        int horasDia = 24;
        // Imprimir mensaje concatenado con valor de variable
        System.out.println("El dia tiene: "+ horasDia + " horas");
    }
}


`,
    isConsole: true,
  },
  // <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
  {
    id: 2,
    enunciado: (
      <div className=" text-black">
          <img
            src="/images/lessons/stage1/Leccion6-img.jpg"
            alt="Leccion1-img"
          />
      </div>
    ),
    instrucciones: (
      <div className=" text-black p-4">
        <p></p>
        <br />

        <ul className="list-disc p-4">
          <li>
            1. Crea dos variables llamadas “num1” y “num2” y asígnales valores
            numéricos de tu elección, estas variables representaran los números
            con los cuales realizaras operaciones. <br />
            2. Realiza suma, resta, multiplicación y división entre las
            variables “num1” y “num2”, deberás crear y almacena los resultados
            en nuevas variables correspondiente a su operación, por ejemplo:
            suma = num1 + num2, resta = num1 – num2, etc. <br />
            3. Utiliza la función{" "}
            <code style={codeStyle(0)}>System.out.println()</code> para mostrar
            por consola los resultados. <br />
          </li>
        </ul>
      </div>
    ),
    checkResult: false,
    code: `
    
public class Main {
    public static void main(String[] args) {
        /*Declaracion de variables*/
        int num1 = 6;
        int num2 = 7;
        
        /*Operaciones matematicas*/
        int suma = num1 + num2;
        System.out.println("Resultado de suma: " + suma);

        int resta = num1 - num2;
        System.out.println("Resultado de resta: " + resta);
        
        int multiplicacion = num1 * num2;
        System.out.println("Resultado de multiplicacion: " + multiplicacion);
        
        int division = num1 / num2;
        System.out.println("Resultado de division: " + division);
    }
}


`,
    isConsole: true,
  },
  // <------------------------------------------------------ EJERCICIO 4 ---------------------------------------------------------->
  {
    id: 3,
    enunciado: (
      <div>
        <img
            src="/images/lessons/stage1/Leccion5-img.jpg"
            alt="Leccion5-img"
            className="h-max "
        />
      </div>
    ),
    instrucciones: (
      <div className=" text-black p-4">
        <p>
          La concatenación no solo sirve para unir texto y variables, tambien
          sirve para unir dos o mas variables de tipo texto (String), ahora
          probaras como concatenar dos variables de tipo texto (String).
        </p>
        <br />

        <ul className="list-disc p-4">
          <li>
            1. Declara una variable de tipo texto (String) llamada "nombre" y
            asignale tu nombre.
          </li>
          <li>
            2. Declara una variable de tipo int llamada "edad" y asignale tu
            edad.
          </li>
          <li>
            3. Utiliza la funcion{" "}
            <code style={codeStyle(0)}>System.out.println()</code> para imprimir
            por consola el mensaje "Hola, mi nombre es: " y el valor de la
            variable "nombre".
          </li>
        </ul>
      </div>
    ),
    checkResult: false,
    code: `
    
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable para almacenar nombre
        String nombre = "Juan";
        // Declaracion de variable para almacenar edad
        int edad = 20;
        // Imprimir mensaje concatenado con valores de variables
        System.out.println("Hola, mi nombre es: " + nombre);
    }
}


`,
    isConsole: true,
  },
];

export default lessonsStage1;
