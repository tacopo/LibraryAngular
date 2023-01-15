class Libros{
    tituloLibro: string;
    rutaPortada:string ;
    resumen: string;
    enlaceAmazon: string;

    constructor(nuevoTitulos: string, nuevaRuta:string, nuevoResumen:string, nuevoAmazon:string){
        this.tituloLibro=nuevoTitulos;
        this.rutaPortada=nuevaRuta;
        this.resumen=nuevoResumen;
        this.enlaceAmazon=nuevoAmazon;
    }
}