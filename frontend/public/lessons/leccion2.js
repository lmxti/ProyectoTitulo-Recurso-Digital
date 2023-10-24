const leccionInfo = {
    /*<------------------------------------Enunciado de la leccion---------------------------------------->*/
    enunciado: (
        <div className=" text-black p-1">
                <img
                    src="/images/lessons/leccion2-img.jpg"
                    alt=""
                    className="w-[50px] h-[50px]"
                />
        </div>
    )
    ,

    /*<--------------------------Instrucciones que el usuario debe seguir--------------------------------->*/
    instrucciones: (
        <div className=" text-black p-5">

        </div>
    ),

    /*<-----------------Verificador de nombre de funcion, parametros y resultado esperado----------------->*/

            /*  La llamada de 'execute' en el lado del servidor (backend) devuelve un parametro "resFunctions"
                que contiene una variable "name" (nombre de la funcion) y una variable "result" (resultado de la funcion ejecutada)
                
                Nota: Esto se puede utilizar para comparar con functionToCheck para validar si es correcto el desarrollo y resultado*/

    functionToCheck: [{ name: "sumar", params: ["1", "4"], result: "5" }], 


    /*<--------------------------Codigo base que utiliza el usuario para trabajar-------------------------->*/
    code: `

public class Main {
    public static void main(String[] args) {
        /* Declara una variable*/
        int res = sumar(1, 2);

        /* Imprime por pantalla el resultado de la suma*/
        System.out.println(res);

    }

    /*Declaracion de funcion "sumar"*/
    static int sumar(int a, int b){
        return a + b;
    }
}

`,
    /*<------------------------------------Indicador de uso de consola------------------------------------->*/
    isConsole : true
}

export default leccionInfo;