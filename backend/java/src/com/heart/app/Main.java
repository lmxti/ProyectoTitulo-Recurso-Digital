package com.heart.app;


public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        System.out.println(MenosUno(2));
        int result = sumar(2, 3);
        System.out.println(result);
   Utils.current.printObjectList();
}

    //Declaracion de una funcion que resta 1 a un numero
    public static int MenosUno(int a){
        return a - 1;
    }

    public static int sumar(int a, int b){
        return a + b;
    }
}
            
                    
        