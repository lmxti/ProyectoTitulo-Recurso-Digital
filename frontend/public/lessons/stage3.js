const lessonsStage3 = [
// Arrays y matrices
    {
        id: 0,
        enunciado: (
            <div>
                <div>
                    <p>Contenido/introduccion arrays</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div>
                <ul>
                    <li>
                        1.&emsp;Crea un array de tipo String llmado 'Nombres' con 5 valores: "Juan", "Pedro", "Maria", "Jose" y "Luis".
                    </li>
                    <li>
                        2.&emsp;Utiliza un bucle 'for' para recorrer todos los valores del array e imprimirlos por consola.
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
    {
        id: 1,
        enunciado: (
            <div>
                <div>
                    <p>Contenido/introduccion arrays</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div>
                <ul>
                    <li>
                        1.&emsp;Crea una matriz de enteros(int) que tenga 3 filas y 3 columnas (3x3).
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Declara e inicializa la matriz con los valores del 1 al 9
        int[][] matriz = {{1,2,3},{4,5,6},{7,8,9}};
        // Imprime la matriz por consola
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz.length; j++){
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}

        `,
        isConsole : true
    },
    {
        id: 2,
        enunciado: (
            <div>
                <div>
                    <p>Contenido/introduccion arrays</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div>
                <ul>
                    <li>
                        1.&emsp;Crea una matriz de enteros(int) que tenga 3 filas y 3 columnas (3x3).
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
    {
        id: 3,
        enunciado: (
            <div>
                <div>
                    <p>Contenido/introduccion arrays</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div>
                <ul>
                    <li>
                        1.&emsp;Crea una matriz 3x3 de enteros (array bidimensional).
                    </li>
                    <li>
                        2.&emsp;Llena la matriz con valores del 1 al 9.
                    </li>
                    <li>
                        3.&emsp;Calcula la suma de cada columna y muestra los resultados en la consola..
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Crear una matriz 3x3 de enteros
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Calcular la suma de cada columna
        int[] sumaColumnas = new int[3];
        for (int fila = 0; fila < 3; fila++) {
            for (int columna = 0; columna < 3; columna++) {
                sumaColumnas[columna] += matriz[fila][columna];
            }
        }

        // Mostrar los resultados de la suma de cada columna en la consola
        for (int i = 0; i < 3; i++) {
            System.out.println("Suma de la columna " + (i + 1) + ": " + sumaColumnas[i]);
        }
    }
}

        `,
        isConsole : true
    },
]

export default lessonsStage3;