import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent  {

  //va a venir del componente padre
  //Podría venir con otro nombre, e internamente lo llamaría persnajes
  //@Input(data) personajes : ....
  // @Input() personajes: Personaje[] = []

  get personajes(){
    return this.DbzService.personajes;
  }


  constructor(private DbzService: DbzService){}
}
