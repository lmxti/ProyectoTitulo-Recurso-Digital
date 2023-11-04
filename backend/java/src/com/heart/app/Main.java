package com.heart.app;



public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        // Creación de un objeto de la clase Gato
        Gato miGato = new Gato();
Utils.current.storeObject(miGato);

        // Asignación de valores a las propiedades del gato
        miGato.nombre = "Mittens";
        miGato.edad = 5;

        // Imprimir la información del gato
        System.out.println("Nombre del gato: " + miGato.nombre);
        System.out.println("Edad del gato: " + miGato.edad);
   Utils.current.printObjectList();
}
}

class Gato {
    public String nombre;
    public int edad;
}

        