
import {codeStyle, variableStyle , valueStyle} from "./stagesStyle"

export const infoStage = { 
    nombre: "Etapa 2: Estructuras de control y Métodos",
    descripcion: "Conoce mas sobre como controlar el flujo de un programa.",
    imagen: "/images/lessons/stage3-P.jpg",
}


const lessonsStage2 =[
//  <------------------------------------------------------ EJERCICIO 0  ---------------------------------------------------------->
    {
        id: 0,
       enunciado: (
           <div className=" text-black">
                <img
                    src="/images/lessons/stage2/Leccion1-img.jpg"
                    alt="Leccion1-img"
                />
         </div >)
       ,
       instrucciones: (
           <div className="text-black p-5 text-justify">
                <p>
                En esta lección, explorarás las estructuras de control y aprenderás a utilizarlas. En la sección teórica, 
                encontrarás información detallada y una explicación sobre el uso de la estructura de control <b>'if-else'</b>.
                </p>

                <hr className="my-4"/>
                
                <p>
                    En este ejercicio, crearemos un programa que nos permita saber si un número es par o impar. 
                    Para ello, utilizaremos la estructura de control <b>'if-else'</b>.
                </p>
               <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                   <li>
                     Crea una variable <code style={variableStyle(0)}>numero</code> de tipo entero <code style={codeStyle(1)}>int</code> y inicializada con un valor a tu elección.
                   </li>

                   <li>
                        Ya cuentas con la estructura básica de un <b>'if-else'</b>, solo debes agregar una condición y
                        el bloque de código que se ejecutará en caso de que la condición sea verdadera y cuando sea falsa.
                   </li>

                   <li>
                        Recuerda que para saber si un número es par o impar se debe dividir por dos, si no deja residuo es par,
                        pero si deja residuo es impar. Para ello, utiliza el operador módulo <code style={codeStyle(0)}>'%'</code>
                   </li>

                   
                   <li>
                        En caso que la condición sea verdadera (si el residuo de división es igual a '0') utiliza la función <code style={codeStyle(0)}>System.out.println()</code>                        
                        para imprimir por consola que el número es par.
                   </li>

                   <li>
                        En caso que la condición sea falsa, imprime por consola que el  número es impar.
                   </li>
                
                   <li>
                     Prueba cambiar el valor de la variable <code style={variableStyle(0)}>numero</code>
                     por otro valor entero y ejecuta el programa nuevamente.
                   </li>
               </ul>

               <hr className="my-4"/>

                <p>
                    La estructura de control <b>'if-else'</b> sirve para ejecutar un bloque de código si se cumple una condición, 
                    en caso de que no se cumpla, se ejecuta otro bloque de código, es esencial para dirigir el flujo de un programa
                    según las circunstancias que se presenten.
                </p>

           </div>
       ),
       checkResult : false,
       codeAnswer:`
        
public class Main {
    public static void main(String[] args) {
        // Declara una variable
        int numero = 2;
        // Utiliza una estructura de control "if-else"
        if(numero % 2 == 0){
            System.out.println("El numero es par");
        }else{
            System.out.println("El numero es impar");
        }
    }
}    
        `,
       code: `

public class Main {
    public static void main(String[] args) {
        // Declara una variable

        // Utiliza una estructura de control "if-else"
        if( ){

        }else{

        }
    }
}  

       `,
       isConsole : true
   },
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
   {
    id: 1,
    enunciado: (
        <div className=" text-black">
                <img
                    src="/images/lessons/stage2/Leccion2-img.jpg"
                    alt="Leccion2-img"
                />
        </div >),
        
    instrucciones: (
        <div className=" text-black p-5 text-justify">
            <p>
            En esta lección, explorarás las estructuras de control, centrándote específicamente en la estructura de control <b>"for"</b>.
             En la sección teórica, encontrarás información y una explicación detallada sobre el uso de esta estructura
            </p>

            <hr className="my-4"/>

            <p>
                Para este ejercicio, crearemos un sencillo programa que nos permita imprimir los números del 1 al 5,
                como sabras la estructura de control <b>"for"</b> es ideal para este tipo de situaciones, para comenzar:
            </p>
            <br/>

            <p>
                Ya cuentas con un for casi completo, tu tarea es completar la estructura con sus valores de inicializacion,
                 condicion y actualizacion, para comenzar deberás:
            </p>

            <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                <li>
                    Declarar la variable de inicializacion de tipo entero <code style={codeStyle(1)}>int</code> con un valor inicial de 0,
                    generalmente a esta variable se le asigna el nombre <code style={variableStyle(0)}>i</code> y actua como un contador, esta se considera
                    como la primera iteración.
                </li>
                <li>
                    Declarar la condicion de ejecucion del <b>'for'</b>, normalmente se utiliza y evalua una expresion que utiliza el contador y un valor,
                    como por ejemplo <code style={codeStyle(0)}>i &lt; 5</code>, esto significa que el for se ejecutara mientras que el valor de <code style={variableStyle(0)}>i</code> sea menor a 5.
                </li>
                <li>
                    Declarar el valor de actualizacion del contador, generalmente se utiliza la expresion <code style={codeStyle(0)}>i++</code>,
                     esto significa que el valor de <code style={variableStyle(0)}>i</code> se incrementara en 1 en cada iteracion.
                </li>
                <li>
                    En cada iteracion del for, imprime el valor de <code style={variableStyle(0)}>i</code> en la consola.
                </li>
            </ul>

            <p>
                Podras darte que cuenta que el for se ejecuta 5 veces, debido a que la variable <code style={variableStyle(0)}>i</code>
                comienza con un valor inicial de <code style={valueStyle(0)}>0</code> y se incrementa en 1 en cada iteracion.
            </p>

            <hr className="my-4"/>

            <p>
                Esto demuestra que la estructura de control <b>"for"</b> es ideal para ejecutar un bloque de codigo cuando sabemos
                la cantidad de iteraciones o repeticiones de bloque de codigo que queremos ejecutar.
            </p>
        </div>
    ),
    checkResult : false,
    codeAnswer:`
        
public class Main {
    public static void main(String[] args) {
        // Estructura de control que itera 5 veces
        for(int i = 0; i < 5; i++){
            System.out.println(i);
        }
    }
}
                
`,
    code: `

public class Main {
    public static void main(String[] args) {
        // Estructura de control que itera 5 veces e imprima el valor de i
        for(int i =   ; condicion ; i++){

        }
    }
}

`,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
    {
        id: 2,
        enunciado: (
            <div className=" text-black">
                <img
                    src="/images/lessons/stage2/Leccion3-img.jpg"
                    alt="Leccion3-img"
                />
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5 text-justify">
                <p>
                    En esta lección, nos sumergiremos en la comprensión de las estructuras de control, centrándonos específicamente en la estructura 
                    <b>" while"</b>. En la sección teórica, encontrarás información detallada y una explicación exhaustiva sobre cómo emplear esta estructura
                </p>
                <hr className="my-4"/>

                <p>
                    Para esta leccion, crearemos un programa que nos permita imprimir los números del <code style={valueStyle(0)}>0</code> al <code style={valueStyle(0)}>5</code>, de forma similar al ejercicio anterior,
                    pero en esta ocasion utilizaremos la estructura de control <b>"while"</b>. Para comenzar:
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Declara una variable <code style={variableStyle(0)}>i</code> de tipo <code style={codeStyle(1)}>int</code> que 
                        utilizaras como contador y debe estar inicializada con un valor de <code style={valueStyle(0)}>0</code>, recuerda que la iteración 0
                        es la primera iteracion.
                    </li>
                    <li>
                        Ya cuentas con la estructura básica de un <b>"while"</b>, solo debes agregar una condición y el bloque de código que se ejecutará.
                    </li>
                    <li>
                        En cada iteración se debe imprimir el valor de <code style={variableStyle(0)}>i</code> en la consola, recuerda que puedes utilizar 
                        la función <code style={codeStyle(0)}>System.out.println()</code> para imprimir en la consola.
                    </li>
                </ul>

                <p>
                    Quiza te preguntaras, porque imprime hasta el 5 si la condición es <code style={codeStyle(0)}>i &lt; 6</code>,
                    esto se debe a que comenzamos con la iteración 0, y se ejecuta hasta que <code style={variableStyle(0)}>i</code> sea menor a 6, si quisieras
                    imprimir hasta el 6 empezando desde 0, podrias modificar la condición como <code style={codeStyle(0)}>i &lt;= 6</code>.
                </p>

                <hr className="my-4"/>

                <p>
                    A diferencia de la estructura de control <b>For</b>, en la estructura de control <b>While</b> se declaran fuera del bucle 
                    antes de su inicio y después de cada iteración, respectivamente. Este tiene un enfoque más modular para la gestión del flujo
                    de control, ideal cuando se requiere mayor control sobre las operaciones de inicialización y actualización del contador.
                </p>

            </div>
        ),
        checkResult : false,
        codeAnswer:`
        
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable que hace de contador
        int i = 0;
        // Declara una estructura while que itere hasta que i sea menor a 6
        while(i < 6){
            System.out.println(i);
            i++;
        }
    }
}
    
                
`,
        code: `
    
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable que hace de contador

        // Declara una estructura while que itere hasta que i sea menor a 6
        while( ){


        }
    }
}
    
    `,
            isConsole : true
        },
            //  <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
    {
        id: 3,
        enunciado: (
            <div className=" text-black">
                <img
                    src="/images/lessons/stage2/Leccion4-img.jpg"
                    alt="Leccion4-img"
                />
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5 text-justify">
                <p>
                    En esta lección, nos adentraremos en el entendimiento de las estructuras de control, centrándonos esta vez en la estructura 
                    <b>"do-while"</b>. En la sección teórica, encontrarás información detallada y una explicación completa sobre cómo utilizar esta estructura.
                </p>

                <hr className="my-4"/>

                <p>
                    Para esta leccion, crearemos un programa que nos permita imprimir los números del <code style={valueStyle(0)}>0</code>
                     al <code style={valueStyle(0)}>5</code>, de forma similar al ejercicio anterior, pero utilizando la estructura de control <b>"do-while"</b>.
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Declara una variable <code style={variableStyle(0)}>i</code> de tipo <code style={codeStyle(1)}>int</code> que 
                        utilizaras como contador y debe estar inicializada con un valor de <code style={valueStyle(0)}>0</code>
                    </li>
                    <li>
                        Declara una estructura <b>"do-while"</b> que itere mientras que <code style={variableStyle(0)}>i</code> menor a 6, recuerda que la condición
                        se evalua al final de cada iteración, por lo que se ejecutará al menos una vez.
                    </li>
                    <li>
                        En cada iteración, deberá imprimir el valor de la variable que hace de contador <code style={variableStyle(0)}>i</code> en la consola.
                        y luego incrementar su valor en 1 utilizando la expresión <code style={codeStyle(0)}>i++</code>.
                    </li>
                    <li>
                        Prueba cambiar el valor de la variable <code style={variableStyle(0)}>i</code> por otro valor que no cumpla la condición como 
                        <code style={valueStyle(0)}>7</code> y ejecuta el programa nuevamente. ¿Qué ocurre? ¿Por qué?
                    </li>
                </ul>

                <hr className="my-4"/>

                <p>
                    Como podras darte cuenta, la estructura de control <b>"do-while"</b> siempre ejecuta el bloque de código al menos una vez y luego
                    evalua la condición, si esta se cumple, se vuelve a ejecutar el bloque de código, de lo contrario, se termina la ejecución.
                </p>
            </div>
        ),
        checkResult : false,
        codeAnswer:`
        
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable que hace de contador
        int i = 0;
        // Declara una estructura do-while que itere mientras que i < 6 
        do {
            System.out.println(i);
            i++;
        } while (i < 6);
    }
}
           
`,
        code: `
    
public class Main {
    public static void main(String[] args) {
        // Declaracion de variable que hace de contador
        int i = 0;
        // Declara una estructura do-while que itere mientras que i < 6 
        do {

        } while ( );
    }
}

    `,
            isConsole : true
        },
//  <------------------------------------------------------ EJERCICIO 5 ---------------------------------------------------------->
        {
            id: 4,
            enunciado: (
                <div className=" text-black">
                    <img
                        src="/images/lessons/stage2/Leccion5-img.jpg"
                        alt="Leccion5-img"
                    />
                </div >),
                
            instrucciones: (
                <div className=" text-black p-5 text-justify">

                    <p>
                        En esta lección, comprenderás lo que es un método y como utilizarlo, en la seccion de teoria encontrarás
                        informacion y una explicación sobre como declarar y utilizar un método.
                    </p>

                    <hr className="my-4"/>

                    <p>
                        Para este ejercicio, crearemos utilizaremos todo lo aprendido hasta ahora para crear un programa que nos permita
                        sumar dos números, empecemos con las instrucciones:
                    </p>

                    <ul className="list-disc px-4 space-y-4" style={{ listStyleType: 'decimal'}}>
                        
                        <li>
                            <b>Declaración de método sumar:</b><br/> 
                            Declara un método static sumar, que reciba dos parámetros <code style={valueStyle(0)}>"a"</code> y 
                            <code style={valueStyle(0)}>"b"</code> de tipo <code style={codeStyle(1)}>int</code>
                            y que retorne un valor de tipo <code style={codeStyle(1)}>int</code>.
                        </li>

                        <li>  
                            <b>Tarea específica de método sumar:</b><br/>
                            El método sumar debe retornar la suma de los dos parámetros (a y b) que recibe, recuerda utilizar 
                            la palabra clave <code style={codeStyle(0)}>return</code> que se utiliza para retornar un valor.
                        </li>

                        <li>
                            <b>Realiza llamada al método sumar </b><br/>
                            En el método <code style={codeStyle(0)}>main</code> realiza una llamada al método sumar pasandole dos parámetros enteros
                            y almacena el resultado en una variable <code style={variableStyle(0)}>result</code> de tipo <code style={codeStyle(1)}>int</code>.
                        </li>

                        <li>
                            <b>Imprime el valor de <code style={variableStyle(0)}>result</code> </b><br/>
                            Imprime el valor de la variable <code style={variableStyle(0)}>result</code> en la consola utilizando
                            <code style={codeStyle(0)}>System.out.println()</code>.
                        </li>
                    </ul>

                    <hr className="my-4"/>

                    <p>
                        Los métodos son herramientas fundamentales que promueven la reutilización de código y aportan un
                        enfoque modular para el diseño de programas. Los métodos son bloques de código que se pueden llamar 
                        desde cualquier parte del programa, y que pueden recibir parámetros y retornar un valor.
                    </p>
                </div>
            ),
            checkResult : true,
            functionToCheck: [{ name: "sumar", params: ["1", "4"], result: "5" }], 
           /*  objectsToCheck: [{ type : "Persona",  properties: [{name : "nombre", value : "Matias"}]}], */
           codeAnswer:`
        
public class Main {
    public static void main(String[] args) {

        /* Crea una variable "result" que almacene lo que retorna
         el método sumar pasandole dos parámetros de tipo entero */
        int result = sumar(2, 3);

        // Imprime el valor de la variable "result"
        System.out.println(result);
    }

    static int sumar(int a, int b){
        return a + b;
    }
}
    
                
`,
            
            code: `

public class Main {
    public static void main(String[] args) {

        /* Crea una variable "result" que almacene lo que retorna
        el método sumar pasandole dos parámetros de tipo entero */
        int result = sumar( , );

        // Imprime el valor de la variable "result"
        System.out.println(result);
    }

    /* Declaracion de método "sumar" que recibe dos parámetros
     de tipo entero (a y b) */
    
     (){
        return a + b;
    }

}
            
                    
        `,
            /*<------------------------------------Indicador de uso de consola------------------------------------->*/
                isConsole : true
            }
        
    ]


export default lessonsStage2;