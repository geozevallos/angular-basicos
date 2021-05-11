import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
    //Las declaraciones vana  ser los componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Que cosas quiero hacer publicas fuero de este modulo
    exports:[
        ListadoComponent
    ],
    //En los imports solo van los modulos
    imports: [
        //Esto es necesario en el NgIf, y NgFor (Directivar personalizadas)
        CommonModule
    ]

})

export class HeroesModule {}