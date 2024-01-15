export const infoStage = {
    nombre: "Etapa 4: Introducción a la POO",
    descripcion: "Aprende a crear y utilizar clases y objetos, herramientas fundamentales para organizar y estructurar un programa.",
    imagen: "/images/lessons/stage5-P.jpg",
}

import { codeStyle, valueStyle, variableStyle } from "./stagesStyle"


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
            <div className=" text-black p-4 text-justify">
                <p>
                    En esta etapa, comprenderás conceptos básicos de la POO, encontrarás un ejemplo práctico que te
                    ayudara a comprender mejor los conceptos de clases y objetos a través de una representación visual.
                </p>

                <hr className="my-4" />


                <p>El primer paso es ejecutar el código que encontrarás en el editor de código</p>
                <ul className="list-disc p-4">
                    <li>
                        ¿Qué es lo que pasa al ejecutar el código?, Explora e intenta analizar el código
                    </li>
                </ul>
                <p>
                    Lo que acabas de ver es un ejemplo visual de como se puede representar un objeto en la vida real en la POO,
                    en este caso, analizaremos el código y veremos como se compone:
                    <br />
                </p>
                <ul className="list-disc p-4" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Clase <b>"Auto":</b> Tenemos una clase llamada Auto, que contiene atributos y métodos, los atributos son las características de lo
                        que sería una versión muy simplificada de un auto del mundo real.
                    </li>
                    <li>

                        Objeto<code style={variableStyle(0)}>autoRojo</code>: Tenemos un objeto llamado autoRojo, que es una instancia de la clase Auto,
                        y cuenta con atributos como: nombre(Toyota), modelo(Yaris), color(#FF0000), velocidad(20) y un atributo "x" que representa la posición en el eje x
                    </li>
                    <li>

                        <code style={codeStyle(0)}>Métodos</code>: Los métodos son acciones que puede realizar un objeto, en este caso, el método avanzar, es una acción que realiza el objeto <code style={variableStyle(0)}>autoRojo</code>
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    No te asustes si no puedes comprender los conceptos y el funcionamiento a la primera, este ejemplo práctico es solo para que puedas hacerte una idea
                    de como se puede representar un objeto de la vida real en la POO, en las siguientes lecciones, veremos desde como se declara una clase hasta como se crea un objeto.
                </p>
            </div>
        ),
        checkResult: false,
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        Auto autoRojo = new Auto( "Toyota", "Yaris","#FF0000", 20);
        Esperar();
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
    String modelo;
    String marca;
    String color; 
    double velocidad;
    double x;

    // Método constructor declarado
    public Auto( String marca, String textoModelo, String color, double velocidad) {
        this.marca = marca;
        this.color = color;
        this.velocidad = velocidad;
        x = 200;
        this.modelo = textoModelo;
    }

    public String getModelo(){
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
    
`,

        code: `

public class Main {
    public static void main(String[] args) {
        Auto autoRojo = new Auto( "Toyota", "Yaris","#FF0000", 20);
        Esperar();
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
    String modelo;
    String marca;
    String color; 
    double velocidad;
    double x;

    // Método constructor declarado
    public Auto( String marca, String textoModelo, String color, double velocidad) {
        this.marca = marca;
        this.color = color;
        this.velocidad = velocidad;
        x = 200;
        this.modelo = textoModelo;
    }

    public String getModelo(){
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
    
`,
        isConsole: false
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
            <div className="text-black p-4 text-justify">
                <p>
                    En esta lección, aprenderás lo que son las clases y objetos, y como se pueden crear y utilizar en Java, encontrarás un ejemplo
                    práctico en la sección de Teoría del cual puedes guiarte para realizar el ejercicio, para comenzar deberás:
                </p>
                <ul className="list-disc p-4" style={{ listStyleType: 'decimal' }}>

                    <li>
                        Crea y define una clase <b>Persona</b> con los atributos <b>nombre</b> y <b>edad </b>
                        de tipo <code style={codeStyle(1)}>String</code> y <code style={codeStyle(1)}>int</code> respectivamente.
                    </li>

                    <li>
                        Define un método <code style={codeStyle(0)}>saludar()</code> que imprima por consola un mensaje de la forma:
                        <code style={valueStyle(0)}>"Hola, mi nombre es: Miguel"</code> por ejemplo.
                    </li>

                    <li>
                        Crea un objeto llamado <code style={variableStyle(0)}>nuevaPersona</code> que pertenezca a la clase <b>Persona</b>
                    </li>

                    <li>
                        Asigna valores a las propiedades del objeto <code style={variableStyle(0)}>nuevaPersona</code>, utiliza
                        la notación de punto para acceder a las propiedades del objeto, ejemplo <i>(objeto.propiedad = valor)</i>
                    </li>

                    <li>
                        Llama al método <code style={codeStyle(0)}>saludar()</code> del objeto <code style={variableStyle(0)}>nuevaPersona</code>
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    En este ejercicio, se aplica lo que se conoce como la abstracción de un objeto/concepto del mundo real en la programación,
                    en este caso, la clase Persona representa una persona del mundo real, los atributos y métodos de la clase Persona son las características comunes de una persona
                </p>
            </div>
        ),
        
        checkResult: true,
        objectsToCheck: [{ type: "Persona", properties: [{ name: "nombre" }, { name: "edad" }] }, ],
        codeAnswer: `
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
        code: `


public class Main {
    public static void main(String[] args) {
        // Creación de un objeto 'nuevaPersona' de clase Persona
        Persona nuevaPersona = new Persona();

        // Asigna el nombre "Miguel" a la propiedad 'nombre' del objeto 'nuevaPersona'
        

        // Asigna el valor 25 a la propiedad 'edad' del objeto 'nuevaPersona'
        

        // Llamada al método 'saludar()' del objeto 'nuevaPersona'
        nuevaPersona.saludar();
    }
}


class Persona{
    // Define un atributo "nombre" de tipo String publico
    
    // Define un atributo "edad" de tipo int publico
    

    // Define metodo void saludar()

}


        `,
        isConsole: true
    },
    //  <------------------------------------------------------ EJERCICIO 2 ---------------------------------------------------------->
    {
        id: 2,
        enunciado: (
            <div className="text-black">
                <img
                    src="/images/lessons/stage4/Leccion2-img.jpg"
                    alt="Leccion2-img"
                />
            </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">

                <p>
                    Anteriormente, se utilizó la notación de punto para acceder a las propiedades de un objeto y asignarles valores,
                    ahora utilizarás lo que se conoce como un <b>constructor</b> para inicializar los atributos de un objeto al momento de crearlo.
                </p>

                <hr className="my-4" />

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Crea una clase <b>Persona</b> con los atributos nombre, edad y altura
                        de tipo <code style={codeStyle(1)}>String</code>, <code style={codeStyle(1)}>int</code> y <code style={codeStyle(1)}>double</code> respectivamente.
                    </li>

                    <li>
                        Declara un método constructor para la clase <b>Persona</b>, este debe recibir los parámetros: nombre, edad y altura definidos anteriormente.
                    </li>

                    <li>
                        Dentro del constructor, debes declarar que los parámetros recibidos se asignen a los atributos de la clase <b>Persona</b>,
                        para ello, utiliza la palabra reservada <code style={codeStyle(0)}>this</code> en caso de que compartan el mismo nombre.
                    </li>


                    <li>
                        Completa el método <code style={codeStyle(0)}>saludar()</code> para que este imprima por consola un mensaje de saludo y presentación, por ejemplo:
                        <code style={valueStyle(0)}>"Hola, mi nombre es: Juan"</code>
                    </li>

                    <li>
                        Desarrolla el método <code style={codeStyle(0)}>despedirse()</code> para que imprima por consola un mensaje de despedida, por ejemplo:
                        <code style={valueStyle(0)}>"Adios, hasta luego!"</code>
                    </li>

                    <li>
                        Crea un objeto <code style={variableStyle(0)}>p1</code> de la clase <b>Persona</b>, utilizando el constructor que creaste anteriormente y
                        pasando parámetros al constructor a tu elección.
                    </li>

                    <li>
                        Llama al método <code style={codeStyle(0)}>saludar()</code> del objeto <code style={variableStyle(0)}>p1</code>
                    </li>

                    <li>
                        Llama al método <code style={codeStyle(0)}>despedirse()</code> del objeto <code style={variableStyle(0)}>p1</code>
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    La diferencia entre declarar un constructor y no hacerlo, es que la primera opción permite inicializar los atributos de la clase
                    al momento de crear un objeto y no tener que asignarles valores uno por uno, cada vez que se crea un objeto.
                </p>
            </div>
        ),
        
        checkResult: true,
        objectsToCheck: [{ type: "Persona", properties: [{ name: "nombre" }, { name: "edad" }, { name: "altura" }] }, ],
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Juan", 22, 1.73);
        //Llamada metodo saludar
        p1.saludar();
        p1.despedirse();
        
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

    // Método despedirse
    public void despedirse() {
        System.out.println("Adios, hasta luego!");
    }
}
`,

        code: `

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Juan", 22, 1.73);
        //Llamada metodo saludar
        p1.saludar();
        p1.despedirse();
        
    }
}

class Persona {
    // Atributos de clase
    public String nombre;
    public int edad;
    public double altura;

    // Método constructor declarado
    public Persona(String nombre, ) {
        this.nombre = nombre;
    }

    // Método saludar
    public void saludar() {

    }

    // Método despedirse
    public void despedirse() {

    }



}
        `,
        isConsole: true
    },
    {
        id: 3,
        enunciado: (
            <div className="text-black">
                <img
                    src="/images/lessons/stage4/Leccion3-img.jpg"
                    alt="Leccion3-img"
                />
            </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    En esta lección, utilizaremos parte de lo aprendido anteriormente para comprender como se declaran y utilizan
                    los <b>setters</b> y <b>getters</b>
                </p>

                <br />

                <p>
                    Ya cuentas con la clase <b>Persona</b> y su método constructor, como pequeña ayuda ya cuentas
                    con un método getter <code style={codeStyle(0)}>getNombre()</code> que se encarga de obtener el nombre del objeto <code style={variableStyle(0)}>p1</code> por lo que solo deberás:
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Utilizar y completa la instancia de objeto <code style={variableStyle(0)}>p1</code> asignándole valores para sus atributos: nombre y edad,
                        que son de tipo <code style={codeStyle(1)}>String</code> y <code style={codeStyle(1)}>int</code> respectivamente.
                    </li>

                    <li>
                        Prueba a ejecutar el código, como podrás observar, el método getter <code style={codeStyle(0)}>getNombre()</code> se encarga de obtener el nombre del objeto
                        <code style={variableStyle(0)}>p1</code>, ahora es tu turno de implementar el método getter <code style={codeStyle(0)}>getEdad()</code> para obtener la edad de este mismo.
                    </li>

                    <li>
                        Ahora es momento de utilizar los métodos <b>setters</b>, deberás definir un método <code style={codeStyle(0)}>setNombre()</code>
                        el cual debe encargarse de asignar un nuevo valor al atributo nombre del objeto <code style={variableStyle(0)}>p1</code>.
                    </li>

                    <li>
                        Define un método <code style={codeStyle(0)}>setEdad()</code> el cual debe encargarse de asignar un nuevo valor al atributo edad del objeto <code style={variableStyle(0)}>p1</code>.
                    </li>

                    <li>
                        Prueba y utiliza los métodos <code style={codeStyle(0)}>setNombre()</code> y <code style={codeStyle(0)}>setEdad()</code>
                        para asignar nuevos valores a los atributos del objeto <code style={variableStyle(0)}>p1</code>, puedes ponerle un nuevo nombre o edad.
                    </li>


                    <li>
                        Imprime un mensaje por consola utilizando los métodos <code style={codeStyle(0)}>getNombre()</code>
                        y <code style={codeStyle(0)}>getEdad()</code> para obtener los nuevos valores de los atributos del objeto <code style={variableStyle(0)}>p1</code>.
                    </li>
                </ul>

                <p>
                    Recuerda que para esta lección, solo debes incorporar código y no borrar, ya que es esencial que puedas ver los cambios sobre el objeto.
                </p>

                <hr className="my-4" />

                <p>
                    Los setters y getters se utilizan para acceder a los atributos privados de una clase, en este caso, la clase Persona tiene dos atributos privados:
                    nombre y age, y para poder acceder a ellos se utilizan los métodos setters y getters.
                </p>

            </div>
        ),
        checkResult: true,
        objectsToCheck: [{ type: "Persona", properties: [{ name: "nombre" }, { name: "edad" }] }, ],
        codeAnswer: `

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Juan", 22);

        // Utiliza el método getter para obtener el nombre del objeto 'p1'
        System.out.println("Nombre: " + p1.getNombre());

        // Utiliza el método getter para obtener la edad del objeto 'p1'
        System.out.println("Edad: " + p1.getEdad());

        // Utiliza el método setter para asignar el nombre "Carlos" al objeto 'p1'
        p1.setNombre("Carlos");
        
        // Utiliza el método setter para asignar la edad 25 al objeto 'p1'
        p1.setEdad(25);

        // Vuelve a utilizar los getter del principio para obtener los nuevos valores de los atributos del objeto 'p1'
        System.out.println("Nombre actualizado: " + p1.getNombre());
        System.out.println("Edad actualizada: " + p1.getEdad());

    }
}

class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad ) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getter para el atributo 'nombre'
    public String getNombre() {
        return nombre;
    }

    // Getter para el atributo 'edad'
    public int getEdad() {
        return edad;
    }

    // Setter para el atributo 'nombre'
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Setter para el atributo 'edad'
    public void setEdad(int edad) {
        this.edad = edad;
    }
}

`,
        code: `

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Juan", 22);

        // Utiliza el método getter para obtener el nombre del objeto 'p1'
        System.out.println("Nombre: " + p1.getNombre());

        // Utiliza el método getter para obtener la edad del objeto 'p1'


        // Utiliza el método setter para asignar el nombre "Carlos" al objeto 'p1'

        
        // Utiliza el método setter para asignar la edad 25 al objeto 'p1'


        // Vuelve a utilizar los getter del principio para obtener los nuevos valores de los atributos del objeto 'p1'
        System.out.println("Nombre actualizado: " );

        System.out.println("Edad actualizada: " );

    }
}

class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad ) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getter para el atributo 'nombre'
    public String getNombre() {
        return nombre;
    }

    // Declara el método Getter para el atributo 'edad'




    // Completa el método Setter para el atributo 'nombre'
    public void setNombre(String nombre) {
        
    }

    // Completa el método Setter para el atributo 'edad'
    public void setEdad(int edad) {
        
    }
}

`,
        isConsole: true
    },
    {
        id: 4,
        enunciado: (
            <div className="text-black">
                <img
                    src="/images/lessons/stage4/Leccion4-img.jpg"
                    alt="Leccion4-img"
                />
            </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    Para esta lección, vamos a poner a prueba lo aprendido anteriormente en conjunto de lo que se conoce como <b>herencia</b> en la POO,
                    en la sección de teoría encontrarás un ejemplo práctico que te ayudara a comprender mejor el concepto de herencia
                </p>

                <hr className="my-4" />

                <p>
                    Ya cuentas con un código base sobre el cual trabajar, este código contiene una clase <b>Animal </b>
                    y una clase <b>Perro</b> que es una subclase de la clase Animal y esta ya cuenta con un método constructor y un método <code style={codeStyle(0)}>ladrar()</code>,
                    del cual podrás guiarte para realizar el ejercicio.
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal' }}>

                    <li>
                        Observa y ejecuta el código actual, analiza que sucede y como se logra.
                    </li>

                    <li>
                        Ahora es tu turno, deberás crear una nueva subclase llamada <b>Gato</b> que herede de la superclase <b>Animal</b> igual que la clase <b>Perro</b>, esta deberá
                        tener un atributo de clase llamado <code style={variableStyle(0)}>nombre</code> de tipo <code style={codeStyle(1)}>String</code>
                    </li>

                    <li>
                        También, deberás definir su método constructor que reciba como parámetro nombre y raza, no olvides que esta última es un atributo de la superclase Animal por lo que
                        deberás utilizar la palabra reservada <code style={codeStyle(0)}>super</code> para acceder a ella.
                    </li>

                    <li>
                        Similar a la clase <b>Perro</b>, deberás definir el método <code style={codeStyle(0)}>maullar()</code> que imprima por consola un mensaje de la acción
                        que realiza y el nombre de quien lo realiza, por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta maullando!"</code>
                    </li>

                    <li>
                        Crea un objeto <code style={variableStyle(0)}>gato1</code> de la clase <b>Gato</b> pasando como parámetros "Felix" y "Angora" al constructor
                    </li>

                    <li>
                        Llama al método <code style={codeStyle(0)}>maullar()</code> del objeto <code style={variableStyle(0)}>gato1</code>
                    </li>

                </ul>

                <p>
                    La herencia es un concepto que permite la creación de nuevas clases basadas en clases existentes, lo que facilita la
                    reutilización del código y la creación de jerarquías de clases, lo que lleva a un diseño de software más flexible y modular.
                </p>

                <hr className="my-4" />

                <p>
                    <b>Reto extra</b>: Quizá no lo notaste, pero el método <code style={codeStyle(0)}>dormir()</code>
                    solo imprime por consola <code style={valueStyle(0)}>"Durmiendo..."</code>, esto puede ser poco detallado e incluso genérico, por lo que te parece
                    si intentas sobreescribir su funcionamiento cuando un objeto de la clase <b>Gato</b> llama al método <code style={codeStyle(0)}>dormir()</code>?
                    Por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta durmiendo!"</code>
                </p>

                <br />
                <p>
                    Para lograr esto, sigue las siguientes instrucciones y consejos:
                </p>
                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Vuelve a declarar el mismo método <code style={codeStyle(0)}>dormir()</code> dentro de la clase <b>Gato</b> y sin borrar la original de la superclase <b>Animal</b>
                    </li>

                    <li>
                        Sobre la nueva declaración del método <code style={codeStyle(0)}>dormir()</code>,
                        utiliza la anotación  <code style={codeStyle(0)}>@Override</code> para indicar y anular el método de la superclase <b>Animal</b>
                    </li>

                    <li>
                        Sobreescribe el funcionamiento del método para que imprima por consola un mensaje de la acción que realiza
                        y el nombre de quien lo realiza, por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta durmiendo!"</code>
                    </li>

                    <li>
                        Ten en cuenta, que el método sobreescrito solo aplicara para la subclase en la cual se sobreescribe, en este caso, el nuevo método
                        <code style={codeStyle(0)}>dormir()</code> solo aplicara para la clase Gato
                    </li>
                </ul>

            </div>
        ),
        checkResult: false,
        codeAnswer: `
public class Main {
    public static void main(String[] args) {
        Perro perro1 = new Perro("Fido", "Chihuahua");
        perro1.ladrar();
        Gato gato1 = new Gato("Felix", "Angora");
        gato1.maullar();
    }
}

class Animal {
    public String raza;

    public Animal(String raza) {
        this.raza = raza;
    }

    public void dormir() {
        System.out.println("Durmiendo...");
    }
}

class Perro extends Animal {
    public String nombre;

    public Perro(String nombre, String raza) {
        super(raza);
        this.nombre = nombre;
    }

    public void ladrar() {
        System.out.println("El perro " + nombre + " esta ladrando!");
    }
}

class Gato extends Animal {
    public String nombre;

    public Gato(String nombre, String raza) {
        super(raza);
        this.nombre = nombre;
    }

    public void maullar() {
        System.out.println("El gato " + nombre + " esta maullando!");
    }

    @Override
    public void dormir() {
        System.out.println("El gato " + nombre + " esta durmiendo!");
    }
}
`,

        code: `
public class Main {
    public static void main(String[] args) {

        Perro perro1 = new Perro("Fido", "Chihuahua");
        perro1.ladrar();

        // Crea un objeto "gato1" de la clase Gato
        
        // Llama al metodo "maullar()" del objeto "gato1"
        
    }
}

// Superclase o clase padre
class Animal {
    public String raza;

    public Animal(String raza) {
        this.raza = raza;
    }

    public void dormir() {
        System.out.println("Durmiendo...");
    }
}

// Subclase o clase hija "Perro"
class Perro extends Animal {
    public String nombre;

    public Perro(String nombre, String raza) {
        super(raza);
        this.nombre = nombre;
    }

    public void ladrar() {
        System.out.println("El perro " + nombre + " esta ladrando!");
    }
}

// Crea una subclase "Gato"

    

    // Declara el metodo constructor de la clase Gato


    // Declara el metodo "maullar()" de la clase Gato


    // Reto, sobreescribe el método dormir() de la superclase Animal utilizando @Override
    


`,
        isConsole: true
    },
    {
        id: 5,
        enunciado: (
            <div className="text-black">
                <img
                    src="/images/lessons/stage4/Leccion5-img.jpg"
                    alt="Leccion5-img"
                />
            </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    Para esta lección, pondremos a prueba tu habilidad para traducir representaciones visuales
                    a código, en la sección teórica, <b>Realidad a programación</b>. Aquí, encontrarás
                    el contexto del problema junto con el código inicial proporcionado en el editor.
                </p>

                <hr className="my-4" />

                <p>
                    Para la clase <b>Pasajero</b>, deberás:
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Crea o instancia 3 objetos de clase, estas serán <code style={variableStyle(0)}>pasajero1</code>,
                        <code style={variableStyle(0)}> pasajero2</code> y <code style={variableStyle(0)}>pasajero3</code>
                    </li>
                    <li>
                        Cada pasajero <i>(1, 2 y 3)</i> debe tener sus valores para sus atributos: rut y nombre, puedes utilizar como ejemplo los que se encuentran
                        en la infografía de teoría <code style={valueStyle(0)}>("22.000.000", "Juan"), ("18.000.000", "Pepe") y ("23.000.000", "Maria")</code>.
                    </li>
                    <li>
                        Crea los getters y setter de la clase Pasajero.
                    </li>
                    <li>
                        Crea un método <code style={codeStyle(0)}>mostrarInformacion()</code> que muestre por consola la información de sus atributos rut y nombre.
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    La clase <b>Bus</b> cuenta con la mayoría de se estructura, por lo que solo debes: :
                </p>
                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Crea una instancia llamada <code style={variableStyle(0)}>bus1</code>,
                    </li>
                    <li>
                        Asígnale la matrícula <code style={valueStyle(0)}>"45678G"</code>.
                    </li>
                    <li>
                        Para la cantidad de pasajeros que puede llevar, por defecto viene con una capacidad para 3, esto se indica en el constructor,
                        se declara que la lista(array) <code style={variableStyle(0)}>pasajeros </code> es un array de tipo <b>Pasajero</b> y de tamaño [<code style={valueStyle(0)}>3</code>]
                    </li>
                    <li>
                        Crea los getters y setter de la clase Bus.
                    </li>
                    <li>
                        Asigna los pasajeros <code style={variableStyle(0)}>pasajeros1,pasajeros2 y pasajeros3</code> al listado(array) de<code style={variableStyle(0)}>pasajeros</code>, recuerda que puedes utilizar
                        la notación  punto "." para acceder a los atributos de los objetos.
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    La clase <b>Conductor</b> ya esta completa, solo debes:
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal' }}>
                    <li>
                        Crear una instancia llamada <code style={variableStyle(0)}>conductor1</code>.
                    </li>
                    <li>
                        Asígnale el valor de licencia como<code style={valueStyle(0)}>"45678GL"</code> y el bus que le pertenece<code style={variableStyle(0)}>bus1</code>.
                    </li>
                    <li>
                        Crea los getters y setter de la clase Conductor.
                    </li>
                </ul>

                <hr className="my-4" />

                <p>
                    Ahora toca crear métodos para interactuar con objetos similarmente a como lo harías en el mundo real, para ello deberás hacer lo siguiente:
                </p>

                <ul className="list-disc p-4 list-inside" >
                    <li>
                        Accede al método<code style={codeStyle(0)}>mostrarInformacion()</code> de un pasajero.
                    </li>
                    <li>
                        Accede al método de un pasajero <code style={codeStyle(0)}>mostrarInformacion()</code> desde<code style={variableStyle(0)}>bus1</code>.
                    </li>
                    <li>
                        Accede al método de un pasajero <code style={codeStyle(0)}>mostrarInformacion()</code> desde<code style={variableStyle(0)}>conductor1</code>.
                    </li>
                    <li>
                        Accede al método <code style={codeStyle(0)}>mostrarMatricula()</code>de<code style={variableStyle(0)}>bus1</code> desde<code style={variableStyle(0)}>conductor1</code>.
                    </li>
                </ul>


            </div>
        ),
        checkResult: true,
        objectsToCheck: [{ type: "Bus", properties: [{ name: "matricula", value: "45678G" }] },
        { type: "Pasajero", properties: [{ name: "nombre", value: "Juan" }, { name: "rut", value: "22.000.000" }] },
        { type: "Pasajero", properties: [{ name: "nombre", value: "Pepe" }, { name: "rut", value: "18.000.000" }] },
        { type: "Pasajero", properties: [{ name: "nombre", value: "Maria" }, { name: "rut", value: "23.000.000" }] },
        { type: "Conductor", properties: [{ name: "licencia", value: "45678GL" }] }
        ],
        codeAnswer: `

public class Main {
    public static void main(String[] args) { 
    
        // Instancias de pasajeros        
        Pasajero pasajero1 = new Pasajero("22.000.000", "Juan");
        Pasajero pasajero2 = new Pasajero("18.000.000", "Pepe");
        Pasajero pasajero3 = new Pasajero("23.000.000", "Maria");
        
        // Instancia de "bus1"
        Bus bus1 = new Bus("45678G");

        // Asigna pasajeros de "bus1"
        bus1.pasajeros[0] = pasajero1;
        bus1.pasajeros[1] = pasajero2;
        bus1.pasajeros[2] = pasajero3;
        
        // Instancia un conductor para el "bus1"
        Conductor conductor1 = new Conductor("45678GL", bus1);

        // Accede e imprime la informacion de un pasajero a traves del bus
        bus1.pasajeros[0].mostrarInformacion();

        // Accede e imprime la informacion de un pasajero a traves del conductor
        conductor1.bus.pasajeros[0].mostrarInformacion();

        // Imprime la matricula del "bus1"
        bus1.mostrarMatricula();

        // Imprime la matricula del "bus1" a traves del "conductor1"
        conductor1.bus.mostrarMatricula();
    }
}

class Pasajero {
    private String rut;
    private String nombre;

    public Pasajero(String rut, String nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }

    public void mostrarInformacion() {
        System.out.println("RUT: " + rut);
        System.out.println("Nombre: " + nombre);
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }
}

class Bus{
    private String matricula;
    public Pasajero[] pasajeros;

    public Bus(String matricula) {
        this.matricula = matricula;
        pasajeros = new Pasajero[3];
    }

    public void mostrarMatricula(){
        System.out.println("La matricula es: " + matricula);
    }

    public Pasajero[] getPasajeros() {
        return pasajeros;
    }
    public String getMatricula() {
        return matricula;
    }
}

class Conductor{
    private String licencia;
    public Bus bus;

    public Conductor(String licencia, Bus bus) {
        this.licencia = licencia;
        this.bus = bus;
    }
    
    public String getLicencia() {
        return licencia;
    }
} 
`,

        code: `

public class Main {
    public static void main(String[] args) {
        // Instancias de pasajeros        
        Pasajero pasajero1 = new Pasajero();



        // Instancia de "bus1"
        Bus bus1 = new Bus("45678G");

        // Asigna pasajeros de "bus1"
        bus1.pasajeros[0] = pasajero1;

        
        
        // Instancia un conductor para el "bus1"
        Conductor conductor1 = new Conductor("45678GL", bus1);

        // Accede e imprime la informacion de un pasajero a traves del bus
        

        // Accede e imprime la informacion de un pasajero a traves del conductor
        

        // Imprime la matricula del "bus1"
        bus1.mostrarMatricula();

        // Imprime la matricula del "bus1" a traves del "conductor1"

    }
}

class Pasajero {
    private String rut;
    private String nombre;

    public Pasajero(String rut, String nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }

    public void mostrarInformacion() {
        System.out.println();
        
    }
}

class Bus{
    private String matricula;
    private Pasajero[] pasajeros;

    public Bus(String matricula) {
        this.matricula = matricula;
        pasajeros = new Pasajero[3];
    }

    public void mostrarMatricula(){
        System.out.println("La matricula es: " + matricula);
    }
}

class Conductor{
    private String licencia;
    private Bus bus;

    public Conductor(String licencia, Bus bus) {
        this.licencia = licencia;
        this.bus = bus;
    }
}        
`,
        isConsole: true
    },
    {
        id: 6,
        enunciado: (
            <div className="text-black">
                <img
                    src="/images/lessons/stage4/Leccion5-img.jpg"
                    alt="Leccion5-img"
                />

            </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-center items-center font-bold text-[2vw]">
                <p className="my-auto">
                    ¡Felicidades! has completado todas las lecciones, para finalizar: 
                </p>
                
                <p className="my-auto">
                    PRESIONA EJECUTAR Y VE EL RESULTADO
                </p>

            </div>
        ),
        checkResult: false,
        codeAnswer: `
public class Main {
    public static void main(String[] args) { 
    
        // Instancias de pasajeros        
        Pasajero pasajero1 = new Pasajero("22.000.000", "Juan");
        Pasajero pasajero2 = new Pasajero("18.000.000", "Pepe");
        Pasajero pasajero3 = new Pasajero("23.000.000", "Maria");
        
        // Instancia un conductor para el "bus1"
        Conductor conductor1 = new Conductor("45678GL");
        
        // Instancia de "bus1"
        Bus bus1 = new Bus("45678G", conductor1);

        // Asigna pasajeros de "bus1"
        bus1.pasajeros[0] = pasajero1;
        bus1.pasajeros[1] = pasajero2;
        bus1.pasajeros[2] = pasajero3;
        Esperar();
        bus1.x = 2000;
        
        Texto textoFinal = new Texto("#FF0000", "Felicidades!", 100);
        Esperar();
        Esperar();
        Esperar();


    }
}

class Pasajero {
    private String rut;
    private String nombre;

    public Pasajero(String rut, String nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }

    public void mostrarInformacion() {
        System.out.println("RUT: " + rut);
        System.out.println("Nombre: " + nombre);
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }
}

class Bus{
    private String matricula;
    public Pasajero[] pasajeros;
    public Conductor conductor;
    public int x;

    public Bus(String matricula, Conductor conductor) {
        this.matricula = matricula;
        pasajeros = new Pasajero[3];
        this.conductor = conductor;
        x = 0;
    }

    public void mostrarMatricula(){
        System.out.println("La matricula es: " + matricula);
    }

    public Pasajero[] getPasajeros() {
        return pasajeros;
    }
    public String getMatricula() {
        return matricula;
    }
}

class Conductor{
    private String licencia;

    public Conductor(String licencia) {
        this.licencia = licencia;
    }
    
    public String getLicencia() {
        return licencia;
    }
} 


class Texto{
    public String color;
    public String texto;
    public int tamano;
    
    public Texto(String color, String texto, int tamano){
        this.color = color;
        this.texto = texto;
        this.tamano = tamano;
    }
}
`,

        code: `
public class Main {
    public static void main(String[] args) { 
    
        // Instancias de pasajeros        
        Pasajero pasajero1 = new Pasajero("22.000.000", "Juan");
        Pasajero pasajero2 = new Pasajero("18.000.000", "Pepe");
        Pasajero pasajero3 = new Pasajero("23.000.000", "Maria");
        
        // Instancia un conductor para el "bus1"
        Conductor conductor1 = new Conductor("45678GL");
        
        // Instancia de "bus1"
        Bus bus1 = new Bus("45678G", conductor1);

        // Asigna pasajeros de "bus1"
        bus1.pasajeros[0] = pasajero1;
        bus1.pasajeros[1] = pasajero2;
        bus1.pasajeros[2] = pasajero3;
        Esperar();
        bus1.x = 2000;
        
        Texto textoFinal = new Texto("#FF0000", "Felicidades!", 100);
        Esperar();
        Esperar();
        Esperar();

    }
}

class Pasajero {
    private String rut;
    private String nombre;

    public Pasajero(String rut, String nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }

    public void mostrarInformacion() {
        System.out.println("RUT: " + rut);
        System.out.println("Nombre: " + nombre);
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }
}

class Bus{
    private String matricula;
    public Pasajero[] pasajeros;
    public Conductor conductor;
    public int x;

    public Bus(String matricula, Conductor conductor) {
        this.matricula = matricula;
        pasajeros = new Pasajero[3];
        this.conductor = conductor;
        x = 0;
    }

    public void mostrarMatricula(){
        System.out.println("La matricula es: " + matricula);
    }

    public Pasajero[] getPasajeros() {
        return pasajeros;
    }
    public String getMatricula() {
        return matricula;
    }
}

class Conductor{
    private String licencia;

    public Conductor(String licencia) {
        this.licencia = licencia;
    }
    
    public String getLicencia() {
        return licencia;
    }
} 


class Texto{
    public String color;
    public String texto;
    public int tamano;
    
    public Texto(String color, String texto, int tamano){
        this.color = color;
        this.texto = texto;
        this.tamano = tamano;
    }
}
`,
        isConsole: false
    },


]

export default lessonsStage4;