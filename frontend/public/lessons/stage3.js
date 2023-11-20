const lessonsStage3 = [
// Arrays y matrices
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className="text-black">
                <div className="flex justify-center p-0">
                    <img
                        src="/images/lessons/stage3/Leccion1-img.jpg"
                        alt="Leccion1-img"
                    />
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>
                    Los arrays tambien se pueden declarar inicializados con valores, para ello debes declarar el array y utilizando el operador '=' asignarle los valores que deseas que contenga entre llaves '{}' y separados por comas ','.
                </p>
                <ul className="list-disc p-4">
                    <li>
                        Como podrás observar, tienes un array "edades" de tipo 'int' ya inicializado que contiene en orden las edades de 5 personas
                    </li>
                    <li>
                        Las edades en orden corresponden a "Juan", "Pedro", "Maria", "Jose" y "Luis", crea un array de tipo 'String' llamado 'nombres' con estos valores.
                    </li>

                    <li>
                        Crea una funcion llamada 'infoPersonas' que reciba como parametros ambos arrays y retorne un String con la informacion de las personas concatenadas en este formato: "Edad.Nombre-"
                    </li>
                </ul>
            </div>
        ),
        functionToCheck: [{ name: "infoPersonas", params: ["new int[]{16, 45, 30, 20, 30}", "new String[]{ \"Juan\", \"Pedro\", \"Maria\", \"Jose\", \"Luis\" }"], result: "16.Juan-45.Pedro-30.Maria-20.Jose-30.Luis-" }], 
        checkResult : true,
        
        code: `

public class Main {
    public static void main(String[] args) {
        //Array de enteros que contiene las edades en orden
        int[] edades = { 16, 45, 30, 20, 30 };
        // Array de Strings que contiene los nombres en orden
        String[] nombres = {"Juan", "Pedro", "Maria", "Jose", "Luis"};

        // Declara un String llamado 'informacion' que almacenara la informacion de las personas
        String informacion = infoPersonas(edades, nombres);
        // Imprime el String 'informacion' por consola
        System.out.print(informacion);
    }

    /* Funcion "InfoPersonas" que recibe dos arrays y
         retorna un String con la informacion de las personas */
    static String infoPersonas(int[] edades, String[] nombres){
        String informacion = "";
        for(int i = 0; i < edades.length; i++){
            informacion += edades[i] + "." + nombres[i] + "-";  
        }
        return informacion;
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
                    <img
                        src="/images/lessons/stage3/Leccion2-img.jpg"
                        alt="Leccion2-img"
                    />
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

    // Funcion principal
    public static void main(String[] args) {
        // Declara e inicializa un array con valores del 1 al 10
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9 ,10};

        // Declara variable resultado que almacenara el resultado de la suma de los elementos del array
        int resultado = sumaArray(array);

        // Imprime el resultado de la suma por consola
        System.out.println("La suma de los elementos del array es: " + resultado);
    }

    // Declara una funcion que sume los elementos de un array y retorne el resultado
    public static int sumaArray(int[] array){
        int suma = 0;
        for(int i = 0; i < array.length; i++){
            suma += array[i];
        }
        return suma;
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
                    <img
                        src="/images/lessons/stage3/Leccion3-img.jpg"
                        alt="Leccion3-img"
                    />
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