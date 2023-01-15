import { Component } from '@angular/core';

@Component({
  selector: 'app-your-books',
  templateUrl: './your-books.component.html',
  styleUrls: ['./your-books.component.scss']
})
export class YourBooksComponent {

  
  libros: Array<Libros>=[];
  
  constructor(){
    this.inicializarLibros();
  }

  inicializarLibros(){
    this.libros=[
      {rutaPortada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDRF2omCJKXQbo3VDWmRzqiXamnlc4V8ozPwXnuCZHQ&s", tituloLibro:"Harry potter y la piedra filosofal", resumen:"El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Deberá acudir entonces a una famosa escuela de magia y hechicería: Howards.", enlaceAmazon:"https://www.amazon.es/Harry-Potter-Piedra-Filosofal-Rowling/dp/8478884459"},
      {rutaPortada: "https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG01M53.jpg", tituloLibro:"El señor de los anillos", resumen:"En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.", enlaceAmazon:"https://www.amazon.es/Senor-Los-Anillos-Comunidad-Fellowship/dp/9505470673/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=la+comunidad+del+anillo&qid=1673740692&sr=8-5"},
      {rutaPortada: "https://imagessl4.casadellibro.com/a/l/t7/04/9788466658904.jpg", tituloLibro:"El pozo de la ascension", resumen:"Durante mil años, han caído las cenizas y nada florece. Durante mil años, los skaa han sido esclavizados y han vivido sumidos en un miedo inevitable. Durante mil años, el Lord Legislador ha reinado con un poder absoluto gracias al terror y la divina invencibilidad que le otorga la poderosa magia de la alomancia. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después, cómo se usa? En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia.", enlaceAmazon:"https://www.amazon.es/Pozo-Ascensi%C3%B3n-Nacidos-bruma-Mistborn-ebook/dp/B00AR07H9A"},
    ]
  }

 
}
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