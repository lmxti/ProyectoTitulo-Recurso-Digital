const lessonsStage4 = [
    // Conceptos basicos de la POO
    //  <------------------------------------------------------ EJERCICIO 1 ---------------------------------------------------------->
    {
        id: 0,
        enunciado: (
            <div className="text-black">
                    <img
                        src="/images/lessons/stage4/Leccion0-img.jpg"
                        alt="Leccion0-img"
                    />
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instrucciones para crear/declarar un constructor
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        Auto autoRojo = new Auto( "Toyota", "Yaris","#FF0000", 30);
        autoRojo.avanzar(10);
        Esperar();
        autoRojo.avanzar(10);
        Esperar();
        autoRojo.avanzar(10);
        Esperar();
        autoRojo.avanzar(10);
        Esperar();
        
    }
}

class Auto{
    
    // Atributos de clase
    Texto modelo;
    String marca;
    String color; 
    double velocidad;
    double x;

    // Método constructor declarado
    public Auto( String marca, String textoModelo, String color, double velocidad) {
        this.marca = marca;
        this.color = color;
        this.velocidad = velocidad;
        x = 100;
        this.modelo = new Texto(textoModelo, color, 100);
    }

    public Texto getModelo(){
        return modelo;
    }
    
    public String getMarca(){
        return marca;
    }
    
    public String getColor(){
        return color;
    }
    
    public double getVelocidad(){
        return velocidad;
    }
    
    public double getX(){
        return x;
    }

    public double avanzar(double tiempo){
        x += tiempo * velocidad;
        return x; 
    }
}

class Texto {
    private int tamano;
    private String color;
    private String texto;

    public Texto(String texto, String color, int tamano)  {
        this.texto = texto;
        this.color = color;
        this.tamano = tamano;
    }


    public String getColor() {
        return color;
    }

    public String getTexto() {
        return texto;
    }
    public int getTamano() {
        return tamano;
    }


    public void setColor(String color) {
        this.color = color;
    }
    
    public void setTexto(String texto) {
        this.texto = texto;
    }
}
        
`,
        isConsole : false
    },
    {
        id: 1,
        enunciado: (
            <div className="text-black">
                    <img
                        src="/images/lessons/stage4/Leccion1v3-img.jpg"
                        alt="Leccion1-img"
                    />
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
        // Creación de un objeto 'nuevaPersona' de la clase Persona
        Persona nuevaPersona = new Persona();

        // Asignación de valores a las propiedades del objeto 'nuevaPersona'
        nuevaPersona.nombre = "Miguel";
        nuevaPersona.edad = 25;

        // Llamada al método 'saludar()' del objeto 'nuevaPersona'
        nuevaPersona.saludar();
    }
}

// Definición de la clase Persona
class Persona{
    // Atributos de la clase Persona
    public String nombre;
    public int edad;

    // Metodos de la clase Persona
    public void saludar(){
        System.out.println("Hola, mi nombre es: " + nombre);
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
                        src="/images/lessons/stage4/Leccion2-img.jpg"
                        alt="Leccion1-img"
                    />
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instrucciones para crear/declarar un constructor
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Juan", 22, 1.73);
        //Llamada metodo saludar
        p1.saludar();
        p1.sentarse();
        
    }
}

class Persona {
    // Atributos de clase
    public String nombre;
    public int edad;
    public double altura;

    // Método constructor declarado
    public Persona(String nombre, int edad, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    // Método saludar
    public void saludar() {
        System.out.println("Hola, mi nombre es " + nombre);
    }

    // Método caminar
    public void caminar() {
        System.out.println("Estoy caminando");
    }

    // Método sentarse
    public void sentarse() {
        System.out.println("Estoy sentado");
    }

}
        `,
        isConsole : true
    },
    {
        id: 3,
        enunciado: (
            <div className="text-black">
                Infografia sobre setters y getters POO, explicacion uso y declaracion
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instrucciones para usar setters y getters
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Create an instance of the Person class
        Person person = new Person();

        // Use setters to set the values of the private fields
        person.setName("John Doe");
        person.setAge(25);

        // Use getters to retrieve the values of the private fields
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}

class Person {
    // Private fields
    private String name;
    private int age;

    // Getter for the 'name' field
    public String getName() {
        return name;
    }

    // Setter for the 'name' field
    public void setName(String name) {
        this.name = name;
    }

    // Getter for the 'age' field
    public int getAge() {
        return age;
    }

    // Setter for the 'age' field
    public void setAge(int age) {
        // Add validation if needed
        if (age >= 0) {
            this.age = age;
        } else {
            System.out.println("Age cannot be negative.");
        }
    }
}


     
`,
        isConsole : true
    },
    {
        id: 4,
        enunciado: (
            <div className="text-black">
                Infografia sobre que es la herencia, uso, declaracion etc,
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4">
                <p>Instrucciones para crear stage4</p>
                <ul className="list-disc p-4">
                    <li>
                        Instrucciones para herencia
                    </li>
                </ul>
            </div>
        ),
        checkResult : false,
        
        code: `

public class Main {
    public static void main(String[] args) {
        // Crear una instancia de Automovil
        Automovil auto = new Automovil("Sedán", "Rojo", 4);
        
        // Llamar a métodos de la clase base (Vehiculo)
        auto.arrancar();
        auto.detenerse();
        
        // Llamar a métodos específicos de Automovil
        auto.mostrarTipo();
        auto.cambiarColor("Azul");
        
        // Crear una instancia de Motocicleta
        Motocicleta moto = new Motocicleta("Deportiva", "Negro", 2);
        
        // Llamar a métodos de la clase base (Vehiculo)
        moto.arrancar();
        moto.detenerse();
        
        // Llamar a métodos específicos de Motocicleta
        moto.mostrarEstilo();
        moto.cambiarColor("Blanco");
    }
}
        
// Clase base
class Vehiculo {
    private String color;
    private int ruedas;

    public Vehiculo(String color, int ruedas) {
        this.color = color;
        this.ruedas = ruedas;
    }

    public void arrancar() {
        System.out.println("El vehículo arrancó.");
    }

    public void detenerse() {
        System.out.println("El vehículo se detuvo.");
    }

    public void cambiarColor(String nuevoColor) {
        this.color = nuevoColor;
        System.out.println("El color del vehículo ha sido cambiado a " + nuevoColor);
    }
}

// Clase derivada (hereda de Vehiculo)
class Automovil extends Vehiculo {
    private String tipo;

    public Automovil(String tipo, String color, int ruedas) {
        super(color, ruedas);
        this.tipo = tipo;
    }

    public void mostrarTipo() {
        System.out.println("Este automóvil es de tipo " + tipo);
    }
}

// Otra clase derivada (hereda de Vehiculo)
class Motocicleta extends Vehiculo {
    private String estilo;

    public Motocicleta(String estilo, String color, int ruedas) {
        super(color, ruedas);
        this.estilo = estilo;
    }

    public void mostrarEstilo() {
        System.out.println("Esta motocicleta es de estilo " + estilo);
    }
}
       

`,
        isConsole : true
    },
]

export default lessonsStage4;