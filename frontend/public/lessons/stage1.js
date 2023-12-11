
import {codeStyle, variableStyle, valueStyle} from "./stagesStyle"

export const infoStage = { 
    nombre: "Etapa 1",
    descripcion: "Variables y operaciones",
    imagen: "/images/java-logo.png"
}


const lessonsStage1 = [

    // <------------------------------------------------------ EJERCICIO 0 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className=" text-black">
                <div className="flex justify-center">
                    <img
                        src="/images/lessons/stage1/Leccion2-img.jpg"
                        alt="Leccion2-img"
                    />
                </div>
            </div>
        ),
        instrucciones: (
            <div className=" text-black p-4 text-justify">
                <p>
                En esta lección, explorarás el concepto de variables en Java. 
                Aprenderás cómo se declaran y cómo se les asigna un valor, así como la manera de imprimir su contenido en la consola.
                </p>
                <br/>
                <p>
                    Sabemos que las variables se utilizan para almacenar valores, por lo que si queremos almacenar un valor en una variable,
                    como por ejemplo, la cantidad de horas que tiene un día, deberias realizar lo siguiente:
                </p>
                <ol className="list-inside p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Declara una variable de tipo <code style={codeStyle(1)}>int</code>
                        de nombre a tu elección como por ejemplo <code style={variableStyle(0)}>horasDia</code>
                        , se recomienda utilizar nombres descriptivos para que sea más facil de comprender.
                    </li>

                    <li>
                        Puedes declarar la variable con el valor inicializado en la misma linea, 
                        o puedes declarar la variable y asignarle el valor en otra linea.
                    </li>

                    <li>
                        Utiliza <code style={codeStyle(0)}>System.out.println()</code> para imprimir por consola
                        el valor de la variable que acabas de declarar.
                    </li>
                </ol>
                <p>
                    Recuerda que las comillas dobles o simples en <code style={codeStyle(0)}>System.out.println()</code>
                    solo se utilizan para imprimir texto, para imprimir el valor de una variable solo debes escribir su nombre dentro de esta funcion.
                </p>

                <hr className="my-4"/>

                <p>
                    Las variables son una parte fundamental de la programación, ya que permiten desde guardar datos y estados,
                    asignar valores de variables a otras, representar expresiones matemáticas, etc.
                </p>
                
            </div>
        ),
        checkResult: false,
        codeAnswer:`
        
public class Main {
    public static void main(String[] args) {
        // Declaración de variable int inicializada
        int horasDia = 24;
        // Impresion de valor de variable por consola
        System.out.println(horasDia);
    }
}

            
        `,
        code: `
        
public class Main {
    public static void main(String[] args) {
        // Declaración de variable int inicializada

        // Impresion de valor de variable por consola
        System.out.println();
    }
}


`,
        isConsole: true,
    },
    // <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 1,
        enunciado: (
            <div className=" text-black">
                <img
                    src="/images/lessons/stage1/Leccion3-img.jpg"
                    alt="Leccion3-img"
                />
            </div>
        ),
        instrucciones: (
            <div className=" text-black p-4 text-justify">

                <p>
                    En la lección previa, exploramos la declaración de variables, asignación de valores y la impresión de
                    su contenido en la consola. Al ejecutar el código, la consola nos presenta el valor <code style={valueStyle(0)}>"24"</code>,
                    pero surge la pregunta: ¿cómo podemos contextualizar y explicar qué representa exactamente este valor?
                </p>

                <hr className="my-4"/>

                <p>
                    En un caso así, es donde se puede aplicar lo que se conoce como la
                    <b> concatenación</b>, que es la unión de dos o más cadenas de texto y
                    variables. En este caso, una cadena de texto y una variable.
                </p>
                <br/>

                <p>
                    Para lograr esto, deberás realizar lo siguiente:
                </p>
                

                <ul className="p-4 " style={{ listStyleType: 'decimal'}}>
                    <li>
                        Utiliza <code style={codeStyle(0)}>System.out.println()</code> para imprimir un mensaje por consola
                    </li>

                    <li>
                        El mensaje debe contener un texto que especifique que representa el valor de la variable, por ejemplo:
                        <em>"El dia tiene: <code style={valueStyle(0)}>x</code> horas"</em>
                    </li>

                    <li>
                        Concatena el mensaje con el valor de la variable utilizando el operador <code style={codeStyle(0)}>+</code>
                    </li>
                </ul>

                <p>
                    Debes tener en cuenta el valor de <code style={variableStyle(0)}>horasDias</code> 
                    debe estar entre <em>"tiene:"</em> y <em>"horas"</em>
                </p>

                <hr className="my-4"/>
                <p>
                    Este enfoque no solo mejora la claridad del mensaje impreso, sino que también fomenta una comprensión
                    más profunda del propósito y significado del valor dentro del contexto del programa.
                </p>

            </div>
        ),
        checkResult: false,
        codeAnswer: `
    
public class Main {
    public static void main(String[] args) {
        // Declaración de variable int inicializada
        int horasDia = 24;
        // Imprime el valor de la variable concatenado con texto
        System.out.println("El dia tiene: " + horasDia + " horas");
    }
}
`,
        code: `
    
public class Main {
    public static void main(String[] args) {
        // Declaración de variable int inicializada
        int horasDia = 24;
        // Imprime el valor de la variable concatenado con texto

    }
}
`,
        isConsole: true,
    },
    // <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
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
            <div className=" text-black p-4 text-justify">
                <p>
                    Las variables, además de almacenar valores, también se utilizan para realizar y almacenar
                    operaciones matemáticas. En este ejercicio, exploraremos las operaciones matemáticas básicas,
                    en la seccion de teoria, encontraras una breve explicación de cada una de ellas.
                </p>
                <br />

                <p>
                    Sigue los siguientes pasos para poner en practica estas operaciones:
                </p>

                <ul className="p-4" style={{ listStyleType: 'decimal'}}>

                    <li>
                        Crea e inicializa dos variables de tipo <code style={codeStyle(1)}>int</code> llamadas
                        <code style={variableStyle(0)}>num1</code> y <code style={variableStyle(0)}>num2</code>,
                        los valores de estas variables deben ser a tu elección.
                    </li>

                    <li>
                        Realiza las operaciones matematicas basicas entre las variables <code style={variableStyle(0)}>num1</code> y
                        <code style={variableStyle(0)}>num2</code> almacenando cada resultado en una variable que lleve el nombre de la operación,
                        ya cuentas con un ejemplo: <code style={variableStyle(0)}>suma</code>, para que puedas guiarte
                    </li>

                    <li>
                        Utilizala el método <code style={codeStyle(0)}>System.out.println()</code> para mostrar los valores de las variables
                        por consola
                        <code style={variableStyle(0)}>resta</code>,
                        <code style={variableStyle(0)}>multiplicacion</code>, 
                        <code style={variableStyle(0)}>division</code> y
                        <code style={variableStyle(0)}>modulo</code>.
                    </li>

                    <li>
                        Concatena cada resultado con un mensaje que especifique que el resultado de la operación, por ejemplo:
                        <em>"<code style={valueStyle(0)}>Resultado de suma: x</code>"</em>
                    </li>

                    <hr className="my-4"/>

                    <p>
                        Estas operaciones son herramientas esenciales para manipular datos, realizar cálculos y construir algoritmos más avanzados.
                    </p>

                  
                </ul>
            </div>
        ),
        checkResult: false,
        codeAnswer: `
    
public class Main {
    public static void main(String[] args) {
        /*Declaracion de variable num1*/
        int num1 = 6;

        /*Declaracion de variable num2*/
        int num2 = 7;
        
        /*Operación matemática: suma*/
        int suma = num1 + 2;
        System.out.println("Resultado de suma: " + suma);

        /*Operación matemática: resta*/
        int resta = num1 - num2;
        System.out.println("Resultado de resta: " + resta);
        
        /*Operación matemática: multiplicación*/        
        int multiplicacion = num1 * num2;
        System.out.println("Resultado de multiplicacion: " + multiplicacion);
        
        /*Operación matemática: división*/
        int division = num1 / num2;
        System.out.println("Resultado de division: " + division);

        /*Operación matemática: módulo*/
        int modulo = num1 % num2;
        System.out.println("Resultado de modulo: " + modulo);
    }
}


`,
        code: `
    
public class Main {
    public static void main(String[] args) {
        /*Declaracion de variable num1*/
        int num1 = 6;

        /*Declara una variable num2*/

        
        /*Operación matemática: suma*/
        int suma = num1 + 2;
        System.out.println("Resultado de suma: " + suma);

        /*Realiza e imprime operación matemática: resta*/


        
        /*Realiza e imprime operación matemática: multiplicación*/        


        
        /*Realiza e imprime operación matemática: división*/



        /*Realiza e imprime operación matemática: módulo*/


    }
}


`,
        isConsole: true,
    },
    // <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
    {
        id: 3,
        enunciado: (
            <div>
                <img
                    src="/images/lessons/stage1/Leccion5-img.jpg"
                    alt="Leccion5-img"
                />
            </div>
        ),
        instrucciones: (
            <div className=" text-black p-4 text-justify">

                <p>
                    En esta lección,  introduciremos un tipo de variable no primitiva conocida como
                    <code style={codeStyle(1)}>String</code>. Este tipo de variable se utiliza para almacenar secuencias de texto o caracteres.
                    En la seccion de teoria, encontraras una breve explicación de este tipo de variable.
                </p>

                <br/>

                <p>
                    Esta lección tiene como objetivo demostrar que la concatenación no se limita únicamente a combinar texto con variables;
                    si no que también se puede utilizar para unir dos o más variables, ya sea de tipo <code style={codeStyle(1)}>String</code>,
                    <code style={codeStyle(1)}>int</code>, u otros tipos.
                </p>

                <br />
                <p>
                    Para comenzar, deberás realizar lo siguiente:
                </p>
                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Declara una variable de tipo texto <code style={codeStyle(1)}>String</code> llamada 
                        <code style={variableStyle(0)}>nombre</code>y asignale tu nombre.
                    </li>
                    <li>
                        Declara una variable de tipo  <code style={codeStyle(1)}>int</code> 
                         llamada <code style={variableStyle(0)}>edad</code> y asignale tu edad.
                    </li>

                    <li>
                        Utiliza el método <code style={codeStyle(0)}>System.out.println()</code>
                        para imprimir en la consola, un mensaje de presentación como por ejemplo: 
                        <i> Hola, mi nombre es <code style={valueStyle(0)}>Kristen Nygaard</code> y mi edad es: <code style={valueStyle(0)}>75</code></i>
                    </li>
                </ul>

                <hr className="my-4"/>

                <p>
                    Recuerda utilizar el operador <code style={codeStyle(0)}>+</code> para la concatenación.La elección de cómo utilizarlo
                    dependerá de lo que desees imprimir. Puedes utilizarlo entre texto y variables, o entre variables, asegurándote de emplear
                    comillas dobles o simples según sea necesario
                </p>
            </div>
        ),
        checkResult: false,
        codeAnswer: `
    
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable para almacenar nombre
        String nombre = "Kristen Nygaard";
        // Declaracion de variable para almacenar edad
        int edad = 75;
        // Imprimir mensaje concatenado con valores de variables
        System.out.println("Hola, mi nombre es: " + nombre + " y mi edad es" + edad);
    }
}


`,
        code: `

public class Main {
    public static void main(String[] args) {
        // Declaracion de variable para almacenar nombre

        // Declaracion de variable para almacenar edad

        // Imprimir mensaje concatenado con valores de variables
        System.out.println("Hola, mi nombre es:" );
    }
}


`,
        isConsole: true,
    },
];

export default lessonsStage1;
