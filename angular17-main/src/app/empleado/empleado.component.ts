import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'app-empleado', //Para añadir componenetes a nuestra página.
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent {

    public title = 'Bienvenido Empleado xdfdf';
    public empleado:Empleado;

    constructor(){
      this.empleado = new Empleado('Pedro',47);
    }

    ngOnInit(){
      console.log(this.empleado);
      
    }

}
