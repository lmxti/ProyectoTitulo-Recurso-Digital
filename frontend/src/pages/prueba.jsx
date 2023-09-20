import { useState } from "react";
import Image from "next/image";
import CodingSectionPrueba from "@/components/CodingSectionPrueba";

const prueba = () => {
  const [resultado, setResultado] = useState("");

  // Función para actualizar el resultado
  const handleResultado = (nuevoResultado) => {
    setResultado(nuevoResultado);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-5">
      {/* Exercise Section */}
      <section className="bg-white rounded-lg">
        <h2 className="bg-eastBay rounded-t-lg p-2 text-2xl font-thin">
          Enunciado
        </h2>
        <div className="h-[450px] overflow-y-scroll text-black p-5">
          <p>
            El primer paso para en el emocionante mundo de la programación es
            escribir un programa que no puede faltar en ninguna introducción a
            un lenguaje de programación, el famoso y sencillo ejercicio de
            imprimir por pantalla la frase <code>"Hello, World!"</code>, ya que
            establece conceptos esenciales como la sintaxis del lenguaje (Java)
            y la estructura de un programa para empezar a explorar el lenguaje.
          </p>

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
        </div>
      </section>

      {/* Coding Section */}
      <CodingSectionPrueba onResult={handleResultado} />

      {/* Instructions Section */}
      <section className="bg-white rounded-lg">
        <h2 className="bg-eastBay rounded-t-lg p-2 text-2xl font-thin">
          Instrucciones
        </h2>
        <div className="h-[450px] overflow-y-scroll text-black p-5">
          <ul className="list-disc p-4">
            <li>
              Imprime por pantalla el mensaje de "Hello, World!" utilizando la función <code className="font-bold">System.out.println()</code>.
            </li>
          </ul>
        </div>
      </section>

      {/* Results section */}
      <section className="bg-white rounded-lg">
        <h2 className="bg-accent rounded-t-lg p-2 text-2xl font-thin">
          Resultados
        </h2>
        <div className="h-[450px] overflow-y-scroll text-black p-5">
          <p>{resultado}</p>
        </div>
      </section>
    </div>
  );
};

export default prueba;
