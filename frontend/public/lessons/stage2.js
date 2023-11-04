const lessonsStage2 =[
    // Introduccion a la programacion
//  <------------------------------------------------------ EJERCICIO 1  ---------------------------------------------------------->
    {
        id: 0,
       enunciado: (
           <div className=" text-black">

               <div className="flex justify-center p-0">
                    <p>Agregar contenido sobre la estructura de control 'if-else'</p>
               </div>
         </div >)
       ,
       instrucciones: (
           <div className=" text-black p-5">
                <p>
                    En esta etapa, comprenderás lo que son las estructuras de control y como utilizarlas, en el enunciado
                    encontrarás informacion sobre el siguiente ejercicio que consiste en utilizar la estructura de control ‘if-else’	
                </p>
               <ul style={{ padding: "10px" }}>
                   <li>
                    1.&emsp;Crea una variable “numero” de tipo entero (int) y asígnale un valor entero. <br/>
                   </li>
                   <li>
                    2.&emsp;Utiliza una estructura de control ‘if-else’ para evaluar si la variable “numero” es par utilizando el operador modulo ‘%’
                   </li>
                   <li>
                    3.&emsp;Si la variable “numero” es par, imprime en consola “El numero es par” <br/>
                   </li>
                   <li>
                    4.&emsp; Prueba cambiando el valor de la variable “numero” y ejecuta el programa nuevamente.
                   </li>
               </ul>
               <p>
                   Ahora tienes una nocion de como utilizar la estructura de control ‘if’ para evaluar una condición y
                   ejecutar un bloque de código si esta es verdadera o falsa.
               </p>
           </div>
       ),
       code: `

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
       isConsole : true
   },
    //  <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
   {
    id: 1,
    enunciado: (
        <div className=" text-black">
            <div className="flex justify-center p-0">
            <p>Estructura de control for </p>
            </div>
        </div >),
        
    instrucciones: (
        <div className=" text-black p-5">
            <ul className="list-disc p-4">
                <li>
                    1. &emsp; Declara una estructura de control ‘for’ que itere 5 veces. <br/>
                </li>
            </ul>
        </div>
    ),
    checkResult : false,
    code: `

public class Main {
public static void main(String[] args) {
    // Declara estructura de control 'for'
    for(int i = 0; i < 5; i++){
        System.out.println(i);
    }
}
}

`,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
    {
        id: 2,
        enunciado: (
            <div className=" text-black">
                <div className="flex justify-center p-0">
                    <p>Estructura de control while </p>
                </div>
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                        1.&emsp; Declara una estructura de control ‘while’ que itere 5 veces. <br/>
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        code: `
    
public class Main {
public static void main(String[] args) {
    // Declara una estructura while
    int i = 0;
    while(i < 6){
        System.out.println(i);
        i++;
    }
}
}
    
    `,
            isConsole : true
        },
            //  <------------------------------------------------------ EJERCICIO 4 ---------------------------------------------------------->
    {
        id: 3,
        enunciado: (
            <div className=" text-black">
                <div className="flex justify-center p-0">
                    <p>Estructura de control do-while </p>
                </div>
            </div >),
            
        instrucciones: (
            <div className=" text-black p-5">
                <ul className="list-disc p-4">
                    <li>
                        1.&emsp; Declara una estructura de control ‘do-while’ que itere 5 veces. <br/>
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        code: `
    
public class Main {
    public static void main(String[] args) {
        // Declara una estructura while
        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 6);
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
        
                    <div className="flex justify-center p-0">
                        <p>Contenido </p>
                    </div>
                </div >),
                
            instrucciones: (
                <div className=" text-black p-5">
                    
                    <p className="font-extrabold" >Objetivo de la Lección: <br/></p>
                        Aprender a crear una función en Java que realice la suma de dos números enteros y devuelva el resultado. <br/> 
                        <br/>

                    <ul className="list-disc p-4">
                        
                        <li>
                        1. &emsp; Definir la Función de Suma<br/>
                        Dentro de la Main, define una función llamada "sumar" que tome dos parámetros de tipo entero(int), de tal manera que quede "sumar(a, b)". 
                        <br/>
                        2. &emsp; Implementar la Función de Suma<br/>
                        Dentro del cuerpo de la función sumar, calcula la suma de los dos números que recibes como parámetros. La función debe devolver la suma de estos dos números, para ello ocupa la palabra clave "return".
                        <br/>
                        3. &emsp; Llamada a la Función<br/>
                        Dentro del método main, llama a la función sumar con dos números enteros como argumentos. Almacena el resultado en una variable.
                        <br/>
                        4. &emsp; Imprimir el Resultado<br/>
                        Usa la función System.out.println() para imprimir el resultado de la suma en la consola.
                        </li>
                    </ul>
                </div>
            ),
            checkResult : true,
            functionToCheck: [{ name: "sumar", params: ["1", "4"], result: "5" }], 
           /*  objectsToCheck: [{ type : "Persona",  properties: [{name : "nombre", value : "Matias"}]}], */
            
            code: `

public class Main {
    public static void main(String[] args) {
        System.out.println(MenosUno(2));
        int result = sumar(2, 3);
        System.out.println(result);
    }

    //Declaracion de una funcion que resta 1 a un numero
    public static int MenosUno(int a){
        return a - 1;
    }

    public static int sumar(int a, int b){
        return a + b;
    }
}
            
                    
        `,
            /*<------------------------------------Indicador de uso de consola------------------------------------->*/
                isConsole : true
            }
        
    ]


export default lessonsStage2;