package com.heart.app;

        
public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {

        /* Crea una variable "result" que almacene lo que retorna
         el método sumar pasandole dos parámetros de tipo entero */
        int result = sumar(2, 3);

        // Imprime el valor de la variable "result"
        System.out.println(result);
   Utils.current.printObjectList();
}

    static int sumar(int a, int b){
        return a + b;
    }
}
    
                
