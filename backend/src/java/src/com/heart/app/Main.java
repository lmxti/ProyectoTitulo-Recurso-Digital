package com.heart.app;

public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) { 
    
        // Instancias de pasajeros        
        Pasajero pasajero1 = new Pasajero("22.000.000", "Juan");
Utils.current.storeObject(pasajero1);
        Pasajero pasajero2 = new Pasajero("18.000.000", "Pepe");
Utils.current.storeObject(pasajero2);
        Pasajero pasajero3 = new Pasajero("23.000.000", "Maria");
Utils.current.storeObject(pasajero3);
        
        // Instancia un conductor para el "bus1"
        Conductor conductor1 = new Conductor("45678GL");
Utils.current.storeObject(conductor1);
        
        // Instancia de "bus1"
        Bus bus1 = new Bus("45678G", conductor1);
Utils.current.storeObject(bus1);

        // Asigna pasajeros de "bus1"
        bus1.pasajeros[0] = pasajero1;
        bus1.pasajeros[1] = pasajero2;
        bus1.pasajeros[2] = pasajero3;
        utils.saveObjectsState();
        bus1.x = 2000;
        
        Texto textoFinal = new Texto("#FF0000", "Felicidades!", 100);
Utils.current.storeObject(textoFinal);
        utils.saveObjectsState();
        utils.saveObjectsState();
        utils.saveObjectsState();

   Utils.current.printObjectList();
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
