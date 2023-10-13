const leccionInfo = {
    enunciado: (
        <div className=" text-black p-5">

            <p>
                El primer paso para en el emocionante mundo de la programación es
                escribir un programa que no puede faltar en ninguna introducción a
                un lenguaje de programación, el famoso y sencillo ejercicio de
                imprimir por pantalla la frase <code> "Hello, World!"</code>, ya que
                establece conceptos esenciales como la sintaxis del lenguaje(Java)
                y la estructura de un programa para empezar a explorar el lenguaje.
            </p >

            <div className="flex justify-center p-5">
                <img
                    src="/images/java-logo.png"
                    alt=""
                    className="w-[200px] h-[200px]"
                />
            </div>

            <ul className="list-disc p-4">
                <li>
                    <code className="font-bold">public class Main</code>: Esto define
                    una clase llamada "Main". En Java, todo el código debe estar
                    dentro de una clase, y el nombre de la clase debe coincidir con el
                    nombre del archivo.
                </li>
                <li>
                    <code className="font-bold">
                        public static void main(String[] args)
                    </code>
                    : Esta es la entrada principal de nuestro programa. Cada programa
                    Java debe tener un método llamado <code>main</code>. Este es el
                    punto de inicio de la ejecución del programa.
                </li>
                <li>
                    <code className="font-bold">
                        System.out.println("Hello, World!");
                    </code>
                    : Esta línea de código imprime la cadena "Hello, World!" en la
                    consola. La función <code>System.out.println()</code> se utiliza
                    para mostrar resultados en la pantalla.
                </li>
            </ul>
        </div >)
    ,

    instrucciones: (
        <div className=" text-black p-5">
            <ul className="list-disc p-4">
                <li>
                    Imprime por pantalla el mensaje de "Hello, World!" utilizando la función <code className="font-bold">System.out.println()</code>.
                </li>
            </ul>
        </div>
    ),

    //La llamada de execute del server devuelve un parametro llamado resFunctions con una variable name(nombre de la funcion) y una variable result(resultado de la funcion ejecutada)
    //se puede usar para comparar el nombre y resultado de estos parametros, con el resultado real que dio la funcion
    functionToCheck: [{ name: "sumar", params: ["1", "4"], result: "5" }], 


    code: `

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
        int res = sumar(1, 2);
        System.out.println("RESULTADO:"+res); 
    }

    static int sumar(int a, int b){
        return a + b;
    }
}

`,
    isConsole : true
}

export default leccionInfo;