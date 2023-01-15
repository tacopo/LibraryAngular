import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() tituloLibro:string ="";
  @Input() rutaPortada:string ="";
  @Input() resumen:string ="";
  @Input() enlaceAmazon:string="";
  btnText="Comprar";
  constructor(){

  } 
  
}
