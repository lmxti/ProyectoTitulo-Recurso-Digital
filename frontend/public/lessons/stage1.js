const codeStyle = (type)=>{
    return { 
        padding: "3px", fontStyle:"italic",  borderRadius: "8px", fontSize: "14px", color: (type == 0 ? "var(--primary-color)" : (type == 1 ? "var(--text-color)" : "var(--secondary-color)")), background : "var(--bg-color)"} }

const variableStyle = (type)=>{
    return { 
        padding: "3px", fontStyle:"italic", fontWeight:"bold", fontSize: "16px", color: (type == 0 ? "var(--primary-color)" : (type == 1 ? "var(--text-color)" : "var(--secondary-color)")) } }
        
        

const lessonsStage1 =[
     {
        enunciado: (
            <div className=" text-black">
                <div className="flex justify-center">
                    <img
                        src="/images/lessons/Leccion1-img.jpg"
                        alt="Leccion1-img"
                    />
                </div>
          </div>)
        ,
        instrucciones: (
            <div className=" text-black p-5">
                <p>Bienvenido a la primera lección de Java, aquí empezaras tu camino para aprender lo que es la programacion orientada a
                    objetos (POO), el primer paso es comprender la sintaxis y funcionamiento basico de un programa.</p>
                <br/>

                <p> Como podrás observar, tienes cuatro ventanas que podrás utilizar para aprender (enunciado),
                     escribir código (editor), seguir pasos (instrucciones) y ver el resultado de tu código (consola).
                </p>

                <ul className="list-disc p-4 ">
                    <li>1. Pulsa el boton ejecutar que se encuentra en el compilador.</li>
                    <li>2. Observa lo que se muestra en la consola, ¿Que mensaje aparece?.</li>
                    <li>
                        3. Prueba cambiando el texto que contiene <code className="font-bold">System.out.println()</code>
                        por otro como "Hola, mundo!" y vuelve a ejecutar el programa.
                    </li>
                </ul>

                <p>Como podrás darte cuenta, la funcion <code className="font-bold">System.out.println()</code> se utiliza para imprimir mensajes por consola</p>


            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        /*Ejecuta este código para ver como funciona!*/
        System.out.println("Hello, World!");
    }
}

        `,
        isConsole : true
    },
/* <-----------------------------------------------------------------------LECCION 1-----------------------------------------------------------------------> */
    {
        enunciado: (
            <div className=" text-black">
                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/Leccion2-img.jpg"
                        alt=""
                        className="w-[50px] h-[50px]"
                    />
                </div>
          </div >)
        ,
        instrucciones: (
            <div className=" text-black p-5">
                <p>
                    En esta leccion, aprenderás como se declaran las variables y como se les asigna un valor, encontrarás un
                    codigo base el cual deberás modificar para que funcione correctamente, en el enunciado encontrarás información sobre como declarar variables y asignarles un valor
                </p>
            <ul className="list-disc p-4">
                    <li>
                        1. Declara una variable llamada “horasDia” de tipo entero <code style={codeStyle(1)}>int</code>, recuerda utilizar la sintaxis correcta.
                    </li>
                    <li>
                        2. La variable "horasDia" debera almacenar el numero de horas que tiene un dia, por lo tanto deberas asignarle un valor numerico de tipo entero.
                    </li>
                    <li>
                        3. Utiliza la funcion <code style={codeStyle(0)}>System.out.println()</code> para imprimir el valor almacenado en "horasDia", aqui ya no es necesario utilizar comillas dobles para imprimir la variable, ya que Java se encarga de imprimir el valor que tiene la variable.
                    </li>
            </ul>
                

            
        </div>
        ),
        checkResult : false,
        code: `
        
public class Main {
    public static void main(String[] args) {
        int horasDia = 24;
        System.out.println(horasDia);

    }
}


`,
  /*<------------------------------------Indicador de uso de consola------------------------------------->*/
  isConsole : true,
    },

    /* <-----------------------------------------------------------------------LECCION 2-----------------------------------------------------------------------> */
    {
        enunciado: (
            <div className=" text-black">

                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/Leccion2-img.jpg"
                        alt=""
                        className="w-[50px] h-[50px]"
                    />
                </div>
          </div >)
        ,
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                    1. Crea dos variables llamadas “num1” y “num2” y asígnales valores numéricos de tu elección, estas variables representaran los números con los cuales realizaras operaciones. <br/>
                    2. Realiza suma, resta, multiplicación y división entre las variables “num1” y “num2”, deberás crear y almacena los resultados en nuevas variables correspondiente a su operación, por ejemplo: suma = num1 + num2, resta = num1 – num2, etc. <br/>
                    3. Utiliza la función <code style={codeStyle(0)}>System.out.println()</code> para mostrar por consola los resultados.  <br/>
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
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
        isConsole : true
    },
/* <-----------------------------------------------------------------------LECCION 3-----------------------------------------------------------------------> */

    {
        enunciado: (
            <div className=" text-black">

                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/Leccion2-img.jpg"
                        alt=""
                        className="w-[50px] h-[50px]"
                    />
                </div>
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                    1.	Define el nombre de la clase como "Concatenacion". <br/>
                    2.	Crea una variable de tipo cadena de texto (String) llamada “nombre” y asígnale tu nombre.<br/>
                    3.	Crea una variable de tipo cadena de texto (String) llamada “saludo” y utiliza la concatenación para combinar el texto “Hola mi nombre es “ y la variable “nombre”<br/>
                    4.	Utiliza <code style={codeStyle(0)}>System.out.println()</code> para mostrar por consola la variable de saludo.<br/>
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        code: `

public class Main {
    public static void main(String[] args) {
        /* Variable que almacena*/
        String nombre = "Juan";
        String saludo = "Hola mi nombre es: "+ nombre;
        System.out.println(saludo);

  }
}

`,
  /*<------------------------------------Indicador de uso de consola------------------------------------->*/
  isConsole : true
    },
    /* <-----------------------------------------------------------------------LECCION 4-----------------------------------------------------------------------> */

    {
        enunciado: (
            <div className=" text-black">

                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/Leccion2-img.jpg"
                        alt=""
                        className="w-[50px] h-[50px]"
                    />
                </div>
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                    1.	Crea una variable “numero” de tipo entero <code style={codeStyle(1)}>int</code> y asígnale un valor entero. <br/>
                    2.	Utiliza una estructura de control <code style={codeStyle(2)}>if</code> para evaluar si la variable “numero” es par utilizando el operador modulo ‘%’ que calcula el residuo de una división, en este caso para comprobar que sea par el dividor debe ser 2.<br/>
                    3.	Utiliza <code style={codeStyle(0)}>System.out.println()</code> para mostrar “El numero es par” si la condicion es verdadera o “El numero es impar” si es falsa.<br/>

                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        code: `

public class Main {
    public static void main(String[] args) {
        int numero = 7;
        if (numero % 2 == 0) {
                System.out.println("El numero es par");
        } else {
                System.out.println("El numero es impar");
        }
    }
}

`,
  /*<------------------------------------Indicador de uso de consola------------------------------------->*/
  isConsole : true
    },
/* <-----------------------------------------------------------------------LECCION 5-----------------------------------------------------------------------> */

    {
        enunciado: (
            <div className=" text-black">

                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/Leccion2-img.jpg"
                        alt=""
                        className="w-[50px] h-[50px]"
                    />
                </div>
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                        
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        code: `

public class Main {
    public static void main(String[] args) {


  }
}

`,
  /*<------------------------------------Indicador de uso de consola------------------------------------->*/
        isConsole : true
    }

]


export default lessonsStage1;