const lessonsStage1 =[
    {
       enunciado: (
           <div className=" text-black">

               <div className="flex justify-center p-0">
                   <img
                       src="/images/lessons/Leccion3-img.jpg"
                       alt=""
                       className="w-[50px] h-[50px]"
                   />
               </div>
         </div >)
       ,
       instrucciones: (
           <div className=" text-black p-5">
               <ul className="list-disc p-4">
                   <li>
                    1.	Crea una variable “numero” de tipo entero (int) y asígnale un valor entero. <br/>
                    2.	Utiliza una estructura de control ‘if’ para evaluar si la variable “numero” es par utilizando el operador modulo ‘%’ que calcula el residuo de una división, en este caso para comprobar que sea par el dividor debe ser 2.<br/>
                    3.	Utiliza System.out.println() para mostrar “El numero es par” si la condicion es verdadera o “El numero es impar” si es falsa.<br/>
                   </li>
               </ul>
           </div>
       ),
       functionToCheck: [{ name: "sumar", params: ["1", "4"], result: "5" }], 
       objectsToCheck: [{ type : "Persona",  properties: [{name : "nombre", value : "Matias"}]}],
       code: `

public class Main {
   public static void main(String[] args) {
       /*Bloque de codigo a escribir*/; 
   }
}

       `,
       isConsole : true
   },
   {
    enunciado: (
        <div className=" text-black">

            <div className="flex justify-center p-0">
                <img
                    src="/images/java-logo.png"
                    alt=""
                    className="w-[50px] h-[50px]"
                />
            </div>
        </div >),
        
    instrucciones: (
        <div className=" text-black p-5">
            <ul className="list-disc p-4">
                <li>

                </li>
            </ul>
        </div>
    ),
    checkResult : false,
    code: `

public class Main {
public static void main(String[] args) {


}
}

`,
/*<------------------------------------Indicador de uso de consola------------------------------------->*/
    isConsole : true
}
]


export default lessonsStage1;