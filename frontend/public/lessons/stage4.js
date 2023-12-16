export const infoStage = { 
    nombre: "Etapa 4: Introducción a la POO",
    descripcion: "Aprende a crear y utilizar clases y objetos, herramientas fundamentales para organizar y estructurar un programa.",
    imagen: "/images/lessons/stage5-P.jpg",
}

import {codeStyle, valueStyle, variableStyle} from "./stagesStyle"


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
                    En esta etapa, comprenderas conceptos básicos de la POO, encontrarás un ejemplo práctico que te 
                    ayudara a comprender mejor los conceptos de clases y objetos a traves de una representacion visual.
                </p>

                <hr className="my-4"/>

                
                <p>El primer paso, es ejecutar el codigo que encontrarás en el editor de codigo</p>
                <ul className="list-disc p-4">
                    <li>
                        ¿Qué es lo que pasa al ejecutar el codigo?, Explora e intenta analizar el codigo
                    </li>
                </ul>
                <p>
                    Lo que acabas de ver es un ejemplo visual de como se puede representar un objeto en la vida real en la POO,
                    en este caso, analizaremos el codigo y veremos como se compone:
                    <br/>
                </p>
                    <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                        <li>
                            Clase <b>"Auto":</b> Tenemos una clase llamada Auto, que contiene atributos y metodos, los atributos son las caracteristicas de lo 
                            que seria una version muy simplificada de un auto del mundo real.
                        </li>
                        <li>
                            
                            Objeto<code style={variableStyle(0)}>autoRojo</code>: Tenemos un objeto llamado autoRojo, que es una instancia de la clase Auto,
                            y cuenta con atributos como: nombre(Toyota), modelo(Yaris), color(#FF0000), velocidad(20) y un atributo x que es la posicion en el eje x
                        </li>
                        <li>
                        
                        <code style={codeStyle(0)}>Métodos</code>: Los métodos son acciones que puede realizar un objeto, en este caso, el metodo avanzar, es una accion que realiza el objeto autoRojo
                        </li>
                    </ul>

                <hr className="my-4"/>
                
                <p>
                    No te asustes si no puedes comprender los conceptos y el funcionamiento a la primera, este ejemplo práctico es solo para que puedas hacerte una idea
                    de como se puede representar un objeto de la vida real en la POO, en las siguientes lecciones, veremos desde como se declara una clase hasta como se crea un objeto.
                </p>
            </div>
        ),
        checkResult : false,
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
        x = 200;
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
        x = 200;
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
            <div className="text-black p-4 text-justify">
                <p>
                    En esta lección, aprenderás lo que son las clases y objetos, y como se pueden crear y utilizar en Java, encontrarás un ejemplo
                    práctico en la seccion de Teoria del cual puedes guiarte para realizar el ejercicio, para comenzar deberás:
                </p>
                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>

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

                <hr className="my-4"/>

                <p>
                    En este ejercicio, se aplica lo que se conoce como la abstracción de un objeto/concepto del mundo real en la programacion,
                    en este caso, la clase Persona representa una persona del mundo real, los atributos y métodos de la clase Persona son las caracteristicas comúnes de una persona
                </p>
            </div>
        ),
        checkResult : false,
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
        isConsole : true
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
                    Anteriormente, se utilizo la notación de punto para acceder a las propiedades de un objeto y asignarles valores,
                    ahora utilizaras lo que se conoce como un <b>constructor</b> para inicializar los atributos de un objeto al momento de crearlo.
                </p>

                <hr className="my-4"/>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Crea una clase <b>Persona</b> con los atributos nombre, edad y altura
                        de tipo <code style={codeStyle(1)}>String</code>, <code style={codeStyle(1)}>int</code> y <code style={codeStyle(1)}>double</code> respectivamente.
                    </li>

                    <li>
                        Declara un método constructor para la clase <b>Persona</b>, este debe recibir los parámetros nombre, edad y altura definidos anteriormente.
                    </li>

                    <li>
                        Dentro del contructor, debes declarar que los parametros recibidos se asignen a los atributos de la clase <b>Persona</b>,
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

                <hr className="my-4"/>

                <p>
                    La diferencia entre declarar un constructor y no hacerlo, es que la primera opcion permite inicializar los atributos de la clase
                    al momento de crear un objeto y no tener que asignarles valores uno por uno, cada vez que se crea un objeto.
                </p>
            </div>
        ),
        checkResult : false,
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
        isConsole : true
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

                <br/>

                <p>
                    Ya cuentas con la clase <b>Persona</b> y su método constructor, como pequeña ayuda ya cuentas 
                    con un método getter <code style={codeStyle(0)}>getNombre()</code> que se encarga de obtener el nombre del objeto <code style={variableStyle(0)}>p1</code> por lo que solo deberas:
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>
                    <li>
                        Utilizar y completa la instancia de objeto <code style={variableStyle(0)}>p1</code> asignandole valores para sus atributos nombre y edad,
                        que son de tipo <code style={codeStyle(1)}>String</code> y <code style={codeStyle(1)}>int</code> respectivamente.
                    </li>

                    <li>
                        Prueba a ejecutar el código, como podrás observar, el método getter <code style={codeStyle(0)}>getNombre()</code> se encarga de obtener el nombre del objeto
                        <code style={variableStyle(0)}>p1</code>, ahora es tu turno de implementar el método getter <code style={codeStyle(0)}>getEdad()</code> para obtener la edad de este mismo.
                    </li>

                    <li>
                        Ahora es momento de utilizar los métodos <b>setters</b>, deberás definir un método <code style={codeStyle(0)}>setNombre()</code>
                        el cuál debe encargase de asignar un nuevo valor al atributo nombre del objeto <code style={variableStyle(0)}>p1</code>.
                    </li>

                    <li>
                        Define un método <code style={codeStyle(0)}>setEdad()</code> el cuál debe encargase de asignar un nuevo valor al atributo edad del objeto <code style={variableStyle(0)}>p1</code>.
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
                    Recuerda que para esta lección, solo debes incorporar codigo y no borrar, ya que es esencial que puedas ver los cambios sobre el objeto.
                </p>

                <hr className="my-4"/>

                <p>
                    Los setters y getters se utilizan para acceder a los atributos privados de una clase, en este caso, la clase Persona tiene dos atributos privados
                    nombre y age, y para poder acceder a ellos, se utilizan los metodos setters y getters.
                </p>

            </div>
        ),
        checkResult : false,
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
    public String nombre;
    public int edad;
    public double altura;

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
    public String nombre;
    public int edad;
    public double altura;

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
        isConsole : true
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
                    en la seccion de teoria encontrarás un ejemplo práctico que te ayudara a comprender mejor el concepto de herencia
                </p>

                <hr className="my-4"/>

                <p>
                    Ya cuentas con un código base sobre el cual trabajar, este código contiene una clase <b>Animal</b>
                     y una clase <b>Perro</b> que es una subclase de la clase Animal y esta ya cuenta con un método constructor y un método <code style={codeStyle(0)}>ladrar()</code>,
                     del cual podrás guiarte para realizar el ejercicio.
                </p>

                <ul className="list-disc p-4" style={{ listStyleType: 'decimal'}}>

                    <li>
                        Observa y ejecuta el código actual, y analiza que succede y como se logra.
                    </li>

                    <li>
                        Ahora es tu turno, deberas crear una nueva subclase llamada <b>Gato</b> que herede de la superclase <b>Animal</b> igual que la clase <b>Perro</b>, esta debera
                        tener un atributo de clase llamado <code style={variableStyle(0)}>nombre</code> de tipo <code style={codeStyle(1)}>String</code>
                    </li>

                    <li>
                        Tambien, deberas definir su método constructor que reciba como parametro nombre y raza, no olvides que esta ultima es un atributo de la superclase Animal por lo que
                        deberas utilizar la palabra reservada <code style={codeStyle(0)}>super</code> para acceder a ella.
                    </li>

                    <li>
                        Similar a la clase <b>Perro</b>, deberas definir el método <code style={codeStyle(0)}>maullar()</code> que imprima por consola un mensaje de la accion
                        que realiza y el nombre de quien lo realiza, por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta maullando!"</code>
                    </li>

                    <li>
                        Crea un objeto <code style={variableStyle(0)}>gato1</code> de la clase <b>Gato</b> pasando como parametros "Felix" y "Angora" al constructor
                    </li>

                    <li>
                        Llama al método <code style={codeStyle(0)}>maullar()</code> del objeto <code style={variableStyle(0)}>gato1</code>
                    </li>

                </ul>

                <p>
                    La herencia es un concepto que permite la creación de nuevas clases basadas en clases existentes, lo que facilita la 
                    reutilización del código y la creación de jerarquías de clases, lo que lleva a un diseño de software más flexible y modular.
                </p>

                <hr className="my-4"/>

                <p>
                    <b>Reto extra</b>: Quiza no lo notaste, pero el método <code style={codeStyle(0)}>dormir()</code>
                    solo imprime por consola <code style={valueStyle(0)}>"Durmiendo..."</code>, quiza esto puede ser poco detallado e incluso genérico, por lo que te parece
                    si intentas sobreescribir su funcionamiento cuando un objeto de la clase <b>Gato</b> llama al método <code style={codeStyle(0)}>dormir()</code>? 
                    Por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta durmiendo!"</code>
                </p>

                <br/>
                <p>
                    Para lograr esto, sigue las siguientes instrucciones y consejos:
                </p>
                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal'}}>
                     <li>
                        Vuelve a declarar el mismo método <code style={codeStyle(0)}>dormir()</code> dentro de la clase <b>Gato</b> y sin borrar la original de la superclase <b>Animal</b>
                    </li>

                    <li>
                        Sobre la nueva declaración del método <code style={codeStyle(0)}>dormir()</code>, 
                        utiliza la anotacion <code style={codeStyle(0)}>@Override</code> para indicar y anular el método de la superclase <b>Animal</b>
                    </li>

                    <li>
                        Sobreescribe el funcionamiento del método para que imprima por consola un mensaje de la accion que realiza 
                        y el nombre de quien lo realiza, por ejemplo: <code style={valueStyle(0)}>"El gato [nombre de gato] esta durmiendo!"</code>
                    </li>

                    <li>
                        Ten en cuenta, que el metodo sobreescrito solo aplicara para la subclase en la cual se sobreescribe, en este caso, el nuevo método 
                        <code style={codeStyle(0)}>dormir()</code> solo aplicara para la clase Gato
                    </li>
                </ul>

            </div>
        ),
        checkResult : false,
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
        isConsole : true
    },
    {
        id: 5,
        enunciado: (
            <div className="text-black">
                    {/* <img
                        src="/images/lessons/stage4/Leccion4-img.jpg"
                        alt="Leccion4-img"
                    /> */}
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    fdghdfgfd
                </p>

                <hr className="my-4"/>

                <p>
                    fdgfdgfdg
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal'}}>
                    <li>
                        xdsdfsdfsdf
                    </li>
                </ul>

                <p>
                    dsfljksdlfsd
                </p>

                <hr className="my-4"/>

                <p>
                    xd
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal'}}>
                    <li>
                        xdsdfsdfsdf
                    </li>
                </ul>

            </div>
        ),
        checkResult : false,
        codeAnswer: `

`,
        
        code: `


`,
        isConsole : false
    },
    {
        id: 6,
        enunciado: (
            <div className="text-black">
                    {/* <img
                        src="/images/lessons/stage4/Leccion4-img.jpg"
                        alt="Leccion4-img"
                    /> */}
          </div>)
        ,
        instrucciones: (
            <div className="text-black p-4 text-justify">
                <p>
                    fdghdfgfd
                </p>

                <hr className="my-4"/>

                <p>
                    fdgfdgfdg
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal'}}>
                    <li>
                        xdsdfsdfsdf
                    </li>
                </ul>

                <p>
                    dsfljksdlfsd
                </p>

                <hr className="my-4"/>

                <p>
                    xd
                </p>

                <ul className="list-disc p-4 list-inside" style={{ listStyleType: 'decimal'}}>
                    <li>
                        xdsdfsdfsdf
                    </li>
                </ul>

            </div>
        ),
        checkResult : false,
        codeAnswer: `

`,
        
        code: `
public class Main {
    public static void main(String[] args) {
        // Bus
        Bus bus1 = new Bus("ABC123");
        Esperar();
    }
}


class Bus{
    String matricula;
    double x;

    public Bus(String matricula) {
        this.matricula = matricula;
        x = 200;
    }
}


`,
        isConsole : false
    },


]

export default lessonsStage4;