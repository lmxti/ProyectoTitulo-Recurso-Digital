package com.heart.app;


public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
        int res = sumar(1, 2);
        System.out.println("RESULTADO:"+res); 
   Utils.current.printObjectList();
}

    static int sumar(int a, int b){
        return a + b;
    }
}

