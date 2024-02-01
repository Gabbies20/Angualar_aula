import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos todos los componentes que vayamos a usar.
import { EmpleadoComponent} from './empleado/empleado.component'
import { CochesComponent} from './coches/coches.component'

//A continuacion definimos las rutas:
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'emleado', component: EmpleadoComponent},
  { path: 'coche', component: CochesComponent},
  { path: '**', component: HomeComponent},
];

//Linea importante:
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
