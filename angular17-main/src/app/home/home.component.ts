import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
import { PeticionesService } from '../services/peticiones.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [RopaService, PeticionesService, HttpClient]
})
export class HomeComponent {
  //recoge los datos que vienene del servidor.
  //El dolar indica que es un observable y el signo de ! que si son nulos que los quiteen.
  public articulos$!:any;   //$ indica que es un observable y ! elimina los null e indefinidos 
   
  //En mis constructor tengo que inyectar la dependencia del servicio.
    //constructor( private _ropaService: RopaService){}
    constructor( private _peticionesService: PeticionesService){}

    ngOnInit(){
      //console.log(this._ropaService.getRopa());
    
      //
      //subscribe: observables patron de diseño.
      //es como el addListener.
      //
		  this._peticionesService.getArticulos().subscribe({
			  next: (result: any) => {
          this.articulos$ = result;
          console.log(this.articulos$);
          if(!this.articulos$){
            console.log("Error en el servidor");
          }
        },
        error: (e: any) => {
          var errorMessage = <any>Error;
          console.log(errorMessage);
        }});
        
    }
}
