const lessonsStage3 = [
// Arrays y matrices
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className="text-black">
                <div>
                    <p>Contenido/introduccion arrays (Imagen visual/comparativa entre codigo y comparacion array)</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear un array</p>
                <ul className="list-disc p-4">
                    <li>
                        Crea un array de tipo String llmado 'Nombres' con 5 valores: "Juan", "Pedro", "Maria", "Jose" y "Luis".
                    </li>
                    <li>
                        Utiliza un bucle 'for' para recorrer todos los valores del array e imprimirlos por consola.
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Crea un array de tipo String llmado 'Nombres' con 5 valores: "Juan", "Pedro", "Maria", "Jose" y "Luis".
        String[] nombres = {"Juan", "Pedro", "Maria", "Jose", "Luis"};
        // Utiliza un bucle 'for' para recorrer todos los valores del array e imprimirlos por consola.
        for(int i = 0; i < nombres.length; i++){
            System.out.println(nombres[i]);
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
            <div className="text-black">
                <div>
                    <p>Contenido/introduccion arrays Idea: mostrar las cajas con datos [][][][][]
                    </p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>
                    Ahora vas a comprender que es un array y realizaras operaciones con los elementos que contiene, en este caso
                    sumaras los elementos que contiene un array de tipo entero (int) con 5 valores: 5, 8, 3, 10 y 2.
                </p>
                <ul className="list-disc p-4">
                    <li>
                        Crea un array de tipo entero llamado 'array' con 5 valores: 5, 8, 3, 10 y 2.
                    </li>
                    <li>
                        Declara e inicializa un entero llamado 'suma' con valor 0 que almacenara el resultado de suma de los elementos del array.
                    </li>
                    <li>
                        Utiliza un bucle 'for' para recorrer todos los valores del array e ir sumandolos a la variable 'suma'.
                    </li>
                    <li>
                        Imprime el resultado de la suma por consola.
                    </li>
                </ul>
            </div>

        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Declara e inicializa un array con 5 valores enteros
        int[] array = {5, 8, 3, 10, 2};
        // Declara e inicializa un entero llamado 'suma' con valor 0 que almacenara el resultado de suma de los elementos del array
        int suma = 0;
        // Utiliza un bucle 'for' para recorrer todos los valores del array e ir sumandolos a la variable 'suma'
        for(int i = 0; i < array.length; i++){
            suma += array[i];
        }
        // Imprime el resultado de la suma por consola
        System.out.println("La suma de los elementos del array es: " + suma);
    }
}
        


        `,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 3 ---------------------------------------------------------->
    {
        id: 2,
        enunciado: (
            <div className="text-black">
                <div>
                    <p>Contenido para utilizar una funcion y un array</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
            <p>
                Ahora, es momento de utilizar una funcion para trabajar con arrays, un ejercicio sencillo que será
                sumar los numeros que contenga un array (del 1 al 10) a traves de una funcion que reciba el array como parametro. 
            </p>
            <ul className="list-disc p-4">
                <li>
                    Crea un array[] de tipo entero llamado 'array' con 10 valores: del 1 al 10.
                </li>
                <li>
                    Crea una funcion llamada 'sumaArray' que reciba como parametro un array de tipo entero y retorne un entero, recuerda que
                    las funciones se declaran fuera y antes de la funcion principal 'main'.
                </li>
                <li>
                    Dentro de la funcion 'sumaArray' utiliza un bucle 'for' para recorrer todos los valores del array e ir sumandolos a una variable "suma" de tipo entero
                    que solo se declarara dentro de la funcion.
                </li>
            </ul>
        </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    // Declara una funcion que sume los elementos de un array y retorne el resultado
    public static int sumaArray(int[] array){
        int suma = 0;
        for(int i = 0; i < array.length; i++){
            suma += array[i];
        }
        return suma;
    }

    // Funcion principal
    public static void main(String[] args) {
        // Declara e inicializa un array con valores del 1 al 10
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9 ,10};

        // Declara variable resultado que almacenara el resultado de la suma de los elementos del array
        int resultado = sumaArray(array);

        // Imprime el resultado de la suma por consola
        System.out.println("La suma de los elementos del array es: " + resultado);
    }
}

        `,
        isConsole : true
    },
    //  <------------------------------------------------------ EJERCICIO 4 ---------------------------------------------------------->
    {
        id: 3,
        enunciado: (
            <div className="text-black">
                <div>
                    <p>Contenido/introduccion matriz, agregar informacion sobre FOR ANIDADO</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>
                    Ahora vas a comprender que es una matriz y realizaras operaciones con los elementos que contiene, en este caso
                    vamos a ver que y cuantos numeros pares tiene una matriz de tipo entero (int) con 3 filas y 3 columnas.
                </p>
                <ul className="list-disc p-4">
                    <li>
                        Crea una matriz[][] de tipo entero llamado 'matriz' con 3 filas y 3 columnas
                        <br/>  [ 1  2  3 ]
                        <br/>  [ 4  5  6 ]
                        <br/>  [ 7  8  9 ]
                    </li>
                    <li>
                        Declara e inicializa un entero llamado 'pares' con valor 0 que almacenara el numero de pares que contiene la matriz.
                    </li>
                    <li>
                        Utiliza dos bucles 'for' anidados para recorrer todos los valores de la matriz e ir contando los numeros pares que contiene.
                    </li>
                    <li>
                        Imprime el valor de la variable 'pares' por consola.
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Declara e inicializa una matriz de 3x3
        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        // Declara e inicializa un entero llamado 'pares' con valor 0 que almacenara el numero de pares que contiene la matriz
        int pares = 0;
        // Utiliza dos bucles 'for' anidados para recorrer todos los valores de la matriz e ir contando los numeros pares que contiene
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] % 2 == 0){
                    pares++;
                }
            }
        }
        // Imprime el valor de la variable 'pares' por consola
        System.out.println("La matriz contiene " + pares + " numeros pares");

    }
}

        `,
        isConsole : true
    },
]

export default lessonsStage3;