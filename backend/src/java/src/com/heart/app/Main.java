package com.heart.app;

public class Main {
static Utils utils = new Utils();
    public static void main(String[] args) {
        // Bus
        Bus bus1 = new Bus("ABC123");
Utils.current.storeObject(bus1);
        utils.saveObjectsState();
   Utils.current.printObjectList();
}
}


class Bus{
    String matricula;
    double x;

    public Bus(String matricula) {
        this.matricula = matricula;
        x = 200;
    }
}


