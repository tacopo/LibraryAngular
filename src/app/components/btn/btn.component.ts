import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() contenidobtn:string ="";
  @Input() enlace:string ="";
  constructor(){

  } 

  irA(){
    document.location.href=this.enlace;
  }
}
