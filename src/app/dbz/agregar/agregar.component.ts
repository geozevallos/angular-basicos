import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
  //@Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  // Esto importa el servicio
  constructor(private dbzService: DbzService) { }
  //Emitir evento de nombre onNuevoPersonaje de tipo <Personaje>
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //Prevent default
    //event.preventDefault();
    console.log(this.nuevo);


    // this.personajes.push(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);


    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }


}
