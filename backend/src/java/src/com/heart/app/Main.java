package com.heart.app;


public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        Auto autoRojo = new Auto( "Toyota", "Yaris","#FF0000", 20);
Utils.current.storeObject(autoRojo);
        utils.saveObjectsState();
        autoRojo.avanzar(10);
        utils.saveObjectsState();
        autoRojo.avanzar(10);
        utils.saveObjectsState();
        autoRojo.avanzar(10);
        utils.saveObjectsState();
        autoRojo.avanzar(10);
        utils.saveObjectsState();
        
   Utils.current.printObjectList();
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
Utils.current.storeObject(modelo);
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
        
