public class Main {
    public static void main(String[] args)  { //PALABRAS ESPECIALES = new : utils.storeObject(), Esperar(); : utils.saveObjectsState()  
        Cuadrado cuadrado1 = new Cuadrado(100, 100, 100, 100, "#0000ff"); 
        Texto texto1 = new Texto("Hola!", "#00ff00", 60);
          
        Esperar(); 
        System.out.println("Prueba texto");
        
        cuadrado1.setColor("#000000");
        cuadrado1.setPos(300, 300);
        Esperar();
        cuadrado1.setTexto(texto1);
        cuadrado1.setPos(500, 100);
        Esperar();
        Esperar();
    }

    static class Cuadrado {
        private int ancho, alto;
        private int x, y;
        private String color;
        private Texto texto;

        public Cuadrado(int ancho, int alto, int x, int y, String color)  {
            this.ancho = ancho;
            this.alto = alto;
            this.x = x;
            this.y = y;
            this.color = color;
            texto = new Texto("perro", color, alto);
        }

        public int getAncho() {
            return ancho;
        }

        public int getAlto() {
            return alto;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }

        public String getColor() {
            return color;
        }

        public Texto getTexto() {
            return texto;
        }

        public void setDimensiones(int ancho, int alto) {
            this.ancho = ancho;
            this.alto = alto;
        }

        public void setPos(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public void setColor(String color) {
            this.color = color;
        }

        
        public void setTexto(Texto texto) {
            this.texto = texto;
        }
    }

    
    static class Texto {
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

}
