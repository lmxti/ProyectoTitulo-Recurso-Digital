const lessonsStage4 = [
    // Conceptos basicos de la POO
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className="text-black">
                <div>
                    <p>Conceptos basicos de la POO</p>
                    <br/>
                    <p>Clase</p>
                    <p>Objeto</p>
                    <p>Ejemplo del gatom</p>
                    <p>Atributos</p>
                    <p>Metodos</p>
                    <p>Explicacion y NO USO de Metodo Constructor()</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instruccion 1
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `


public class Main {
    public static void main(String[] args) {
        // Creación de un objeto de la clase Gato
        Gato miGato = new Gato();

        // Asignación de valores a las propiedades del gato
        miGato.nombre = "Mittens";
        miGato.edad = 5;

        // Imprimir la información del gato
        System.out.println("Nombre del gato: " + miGato.nombre);
        System.out.println("Edad del gato: " + miGato.edad);
    }
}

class Gato {
    public String nombre;
    public int edad;
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
                    <p>Contenido concepto basico POO</p>
                    <br/>
                    <p>Ejemplo del auto</p>
                    <p>Uso del metodo Metodo Constructor()</p>
                    <p>Instancia de un auto</p>
                    <p>Uso de un metodo de la clase Auto podria ser acelerar</p>
                </div>
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instruccion 1
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `
public class Main {
    public static void main(String[] args) {
        // Ejecuta este código para ver como funciona!
        System.out.println("Hello, World!");
    }
}

        `,
        isConsole : true
    },
]

export default lessonsStage4;