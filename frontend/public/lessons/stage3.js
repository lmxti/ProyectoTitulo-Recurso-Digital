export const infoStage = { 
    nombre: "Etapa 3: Arrays y Matrices",
    descripcion: "Explorando lo que son conjuntos de datos y estructuras multidimensionales.",
    imagen: "/images/lessons/stage4-P.jpg",
}

import {codeStyle, valueStyle, variableStyle} from "./stagesStyle"


const lessonsStage3 = [
// Arrays y matrices
    //  <------------------------------------------------------ EJERCICIO 0 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className="text-black">
                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/stage3/Leccion1-img.jpg"
                        alt="Leccion3-img"
                    />
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">

                <p>
                    En esta leccion aprenderas a declarar y utilizar arrays, un array es una variable que puede almacenar varios valores del mismo tipo.
                    En la sección teórica, encontrarás información detallada y una explicación exhaustiva sobre cómo utilizar esta estructura para almacenar
                    y manipular conjuntos de datos. 
                </p>

                <hr className="my-4"/>

                <p>
                    Para esta leccion, vamos a trabajar con un array de tipo de tipo <code style={codeStyle(1)}>int</code> que contiene
                    las edades de 5 personas que son Juan, Pedro, Maria, Jose y Luis en el mismo orden. Se necesita mostrar el nombre de las personas
                    junto a su edad, para ello deberas:
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>

                    <li>
                        Crear un array de tipo <code style={codeStyle(1)}>String[]</code> llamado <code style={variableStyle(0)}>nombres</code> que contenga los nombres de las personas en el mismo orden que las edades.
                    </li>

                    <li>
                        Ya cuentas con una base del método <b>infoPersonas</b>, deberas declarar el tipo de dato que retornará
                        y los tipos de dato que recibirá como parámetros.
                    </li>

                    <li>
                        El método <b>infoPersonas</b> deberá retornar un String con la información de las personas concatenadas en este formato: <i><code style={valueStyle(0)}>Edad.Nombre-</code></i>
                    </li>

                    <li>
                        Puedes utilizar la variable <code style={variableStyle(0)}>informacion</code> para ir almacenando la concatenación de los nombres y edades.
                    </li>

                    <li>
                        Puedes utilizar un bucle <code style={codeStyle(2)}>for</code> para recorrer los arrays y concatenar los valores, recuerda tambien
                        que puedes acceder a los valores de un array a traves de su indice, por ejemplo: <code style={codeStyle(1)}>nombres[0]</code> accede al primer valor del array.
                    </li>

                    <li>
                        La funcion <b>infoPersonas</b> deberá retornar el String <code style={valueStyle(0)}>informacion</code> con una concatenación de los nombres y edades.
                    </li>

                    <li>
                        Realiza la llamada a la funcion <b>infoPersonas</b> y almacena el resultado en una variable <code style={variableStyle(0)}>resultado</code>.
                    </li>

                    <li>
                        Imprime el contenido de la variable <code style={variableStyle(0)}>resultado</code> por consola,
                        deberia mostrarse algo como: <i><code style={valueStyle(0)}>16.Juan-45.Pedro-30.Maria-20.Jose-30.Luis-</code></i>
                    </li>
                </ul>

                <hr className="my-4"/>

                <p>
                    Los arrays son una herramienta que facilitan la manipulación, almacenamiento y acceso eficiente a los datos,
                    lo que contribuye a la claridad del código y mejora el rendimiento en operaciones repetitivas.
                </p>
            </div>
        ),
        functionToCheck: [{ name: "infoPersonas", params: ["new int[]{16, 45, 30, 20, 30}", "new String[]{ \"Juan\", \"Pedro\", \"Maria\", \"Jose\", \"Luis\" }"], result: "16.Juan-45.Pedro-30.Maria-20.Jose-30.Luis-" }], 
        checkResult : true,
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        //Array de enteros que contiene las edades de personas en orden
        int[] edades = { 16, 45, 30, 20, 30 };

        // Declara un array de Strings que contiene los nombres de las personas
        String[] nombres = {"Juan", "Pedro", "Maria", "Jose", "Luis"};

        String resultado = infoPersonas(edades, nombres);

        System.out.print(resultado);
    }

    static String infoPersonas(int[] edades, String[] nombres){
        // Variable que almacenara la informacion concatenada de las personas
        String informacion = "";

        for(int i = 0; i < edades.length; i++){
            informacion += edades[i] + "." + nombres[i] + "-";  
        }
        return informacion;
    }
}

`,
        
        code: `

public class Main {
    public static void main(String[] args) {
        //Array de enteros que contiene las edades de personas en orden
        int[] edades = { 16, 45, 30, 20, 30 };

        // Declara un array de Strings que contiene los nombres de las personas
        String[] nombres = {"Juan", "Pedro", "Maria", "Jose", "Luis"};

        String resultado = infoPersonas(edades, nombres);

        System.out.print(resultado);
    }

    static String infoPersonas( /*Parametros*/ ){
        String informacion = "";

        for(int i = 0; i < edades.length; i++){

        }
        // Indica el valor/variable de retorno

    }
}

        `,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 1,
        enunciado: (
            <div className="text-black">
                    <img
                        src="/images/lessons/stage3/Leccion2-img.jpg"
                        alt="Leccion2-img"
                    />
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">

                <p>
                    Si tuvieramos un array de 5, 10 elementos o hasta 20 podriamos trabajar facilmente con ellos, pero si la cantidad de elementos
                    cambia/aumenta constantemente como de 10 a 50 o incluso hasta 1000? 
                </p>

                <br/>

                <p>
                    En esta lección, encontrarás informacion sobre la propiedad <code style={codeStyle(0)}>.length</code> que
                    permite obtener la longitud/cantidad de elementos de un <b> array</b>. Esta propiedad es particularmente útil cuando trabajamos con
                    <b> arrays</b> cuya cantidad de elementos puede cambiar dinámicamente
                </p>
                
                <hr className="my-4"/>

                <p>
                    Para este ejercicio, contarás con un array <code style={variableStyle(0)}>numeros</code> de tipo <code style={codeStyle(1)}>int</code>
                    que contiene una cantidad de números que no sabemos su exactitud, necesitamos mostrar cuantos numeros contiene el array y la suma de ellos,
                    por lo que deberas:
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Ya cuentas con un array de tipo <code style={codeStyle(1)}>int</code> llamado <code style={variableStyle(0)}>numeros</code> que contiene una cantidad desconocida de numeros.
                    </li>
                    <li>
                        Además ya tienes un método <code style={codeStyle(0)}>sumaArray()</code> que recibe como parámetro un array de tipo <code style={codeStyle(1)}>int</code> 
                        y retorna un valor de tipo <code style={codeStyle(1)}>int</code>.
                    </li>
                    <li>
                        Dentro del método, declara una variable de tipo <code style={codeStyle(1)}>int</code> llamada <code style={variableStyle(0)}>suma</code> con valor 0 que almacenará la suma de los elementos del array.
                    </li>
                    <li>
                        Utiliza un bucle <code style={codeStyle(2)}>for</code> para recorrer todos los elementos del array y sumarlos.
                    </li>
                    <li>
                        Realiza una llamada al método <code style={codeStyle(0)}>sumaArray()</code> 
                        y almacena el resultado en una variable <code style={variableStyle(0)}>resultado</code>.
                    </li>

                    <li>
                        Utiliza el método <code style={codeStyle(0)}>System.out.println()</code> en conjunto de la
                        propiedad <code style={codeStyle(0)}>.length</code> para mostrar la cantidad de elementos que contiene el array.
                    </li>

                    <li>
                        Imprime un mensaje que indique la suma de los elementos del array.
                    </li>
                </ul>

                <hr className="my-4"/>

                <p>
                    Utilizar .length nos permite evitar la necesidad de ajustar manualmente el código cada vez que la cantidad de elementos varía.
                </p>
            </div>
        ),
        checkResult : true,
        functionToCheck: [{ name: "sumaArray", params: ["new int[]{1, 1, 1, 1, 1}"], result: "5" }], 
        
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13 ,14 ,15 ,16 ,17 ,18 ,19 ,20, 21, 22, 23 ,24 ,25 ,26 ,27 ,28 ,29 ,30, 31, 32, 33 ,34 ,35 ,36 ,37 ,38 ,39 ,40, 41, 42, 43 ,44 ,45 ,46 ,47 ,48 ,49 ,50, 51, 52, 53 ,54 ,55 ,56 ,57 ,58 ,59 ,60, 61, 62, 63 ,64 ,65 ,66 ,67 ,68 ,69 ,70, 71, 72, 73 ,74 ,75 ,76 ,77 ,78 ,79 ,80, 81, 82, 83 ,84 ,85 ,86 ,87 ,88 ,89 ,90, 91, 92, 93 ,94 ,95 ,96 ,97 ,98 ,99 ,100};

        int resultado = sumaArray(numeros);

        // Imprime la cantidad de elementos que tiene el array
        System.out.println("El array numeros contiene " + numeros.length + " elementos");
        
        // Imprime el resultado de la suma por consola
        System.out.println("La suma de los elementos del array numeros es: " + resultado);
    }

    static int sumaArray(int[] numeros){
        int suma = 0;
        for(int i = 0; i < numeros.length; i++){
            suma += numeros[i];
        }
        return suma;
    }
}
        

        `,
        
        code: `

public class Main {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13 ,14 ,15 ,16 ,17 ,18 ,19 ,20, 21, 22, 23 ,24 ,25 ,26 ,27 ,28 ,29 ,30, 31, 32, 33 ,34 ,35 ,36 ,37 ,38 ,39 ,40, 41, 42, 43 ,44 ,45 ,46 ,47 ,48 ,49 ,50, 51, 52, 53 ,54 ,55 ,56 ,57 ,58 ,59 ,60, 61, 62, 63 ,64 ,65 ,66 ,67 ,68 ,69 ,70, 71, 72, 73 ,74 ,75 ,76 ,77 ,78 ,79 ,80, 81, 82, 83 ,84 ,85 ,86 ,87 ,88 ,89 ,90, 91, 92, 93 ,94 ,95 ,96 ,97 ,98 ,99 ,100};

        int resultado = sumaArray(numeros);

        // Imprime la cantidad de elementos que tiene el array
        System.out.println();

        // Imprime el resultado de la suma por consola
        System.out.println();
    }

    static int sumaArray(int[] numeros){
        int suma = 0;

        return suma;
    }
}

        `,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
    {
        id: 2,
        enunciado: (
            <div className="text-black">
                    <img
                        src="/images/lessons/stage3/Leccion3-img.jpg"
                        alt="Leccion3-img"
                    />
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    En esta lección, encontrarás información sobre lo que es una matriz, el término se utiliza para referirse a un
                    array bidimensional, organizando datos en filas y columnas, formando una cuadricula.
                </p>
                <br/>
                <p>
                    Para este ejercicio, necesitamos contar la cantidad de numeros pares que contiene una matriz de 3x3, que contiene valores del 1 al 9,
                    para ello deberas:
                </p>
                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Ya cuentas con una matriz de tipo <code style={codeStyle(1)}>int[][]</code> llamada <code style={variableStyle(0)}>matriz</code> que contenga los valores del 1 al 9, puedes visualizarla como:
                        <pre> [ 1  2  3 ] </pre>
                        <pre > [ 4  5  6 ]</pre>
                        <pre > [ 7  8  9 ]</pre>
                    </li>
                        
                    <li>
                        Completa y utiliza el método <code style={codeStyle(0)}>numerosPares()</code> que esta semi-listo para 
                        programar la lógica que permita contar los numeros pares que contiene la matriz.
                    </li>

                    <li>
                        Almacena la cantidad de numeros pares que contiene la matriz en una variable <code style={variableStyle(0)}>pares</code>.
                    </li>
                    <li>
                        Recorre <code style={variableStyle(0)}>matriz</code> utilizando un bucle, se recomienza utilizar el <b>'for anidado'</b>, que corresponde a un for dentro de otro,
                        donde el primero corresponde a las filas y el segundo a las columnas.
                    </li>
                    <li>
                        El método <code style={codeStyle(0)}>numerosPares()</code> deberá retornar la variable <code style={variableStyle(0)}>pares</code>.
                    </li>

                    <li>
                        Realiza la llamada al método <code style={codeStyle(0)}>numerosPares()</code> pasandole como parámetro la matriz <code style={variableStyle(0)}>matriz</code>
                         y almacena el resultado en una variable <code style={variableStyle(0)}>resultado</code>.
                    </li>

                    <li>
                        Imprime un mensaje que indique la cantidad de numeros pares que contiene la matriz, deberia mostrarse algo como: <i><code style={valueStyle(0)}>La matriz contiene 2 numeros pares</code></i>
                    </li>
                </ul>
            </div>
        ),
        checkResult : true,
        functionToCheck: [{ name: "numerosPares", params: ["new int[][]{{2, 2, 1}, {1, 1, 1}, {1, 1, 1}}"], result: "2" }], 
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        // Matriz de 3x3
        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        // Almacena el resultado de la llamada al metodo 'numerosPares' en una variable 'resultado'
        int resultado = numerosPares(matriz);

        // Imprime un mensaje indicando cantidad de numeros pares
        System.out.println("La matriz contiene " + numerosPares(matriz) + " numeros pares");
    }

    static int numerosPares(int[][] matriz){
        // Declara e inicializa un entero llamado 'pares' con valor 0 que almacenara el numero de pares que contiene la matriz
        int pares = 0;

        // Bucle 'for' para reccorer las filas de la matriz
        for(int i = 0; i < matriz.length; i++){
            // Bucle 'for' para reccorer las columnas de la matriz
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] % 2 == 0){
                    pares++;
                }
            }
        }
        return pares;

    }
}

        `,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Matriz de 3x3
        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        // Almacena el resultado de la llamada al metodo 'numerosPares' en una variable 'resultado'
        

        // Imprime un mensaje indicando cantidad de numeros pares
        System.out.println("La matriz contiene " +  + " numeros pares");
    }

    static int numerosPares(int[][] matriz){
        // Declara e inicializa un entero llamado 'pares' con valor 0 que almacenara el numero de pares que contiene la matriz
        int pares = 0;
        
        // Bucle 'for' para reccorer las filas de la matriz
        for(){

        }
        return pares;

    }
}

        `,
        isConsole : true
    },
]

export default lessonsStage3;