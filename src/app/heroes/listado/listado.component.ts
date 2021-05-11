import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string[] = ['Thor', 'Iron Man', 'Spiderman', 'Hulk', 'Capitan America'];
  heroeBorrado: string = "";

  borrarHeroe(){
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || ""
    //this.heroes.splice(1,1);


  }


}
