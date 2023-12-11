package com.heart.app;

    
public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        // Declaracion de variable para almacenar nombre
        String nombre = "Kristen Nygaard";
        // Declaracion de variable para almacenar edad
        int edad = 75;
        // Imprimir mensaje concatenado con valores de variables
        System.out.println("Hola, mi nombre es: " + nombre + " y mi edad es" + edad);
   Utils.current.printObjectList();
}
}


