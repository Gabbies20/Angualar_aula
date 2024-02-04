import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos todos los componentes que vayamos a usar.
import { EmpleadoComponent} from './empleado/empleado.component'
import { CochesComponent} from './coches/coches.component'
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';

//A continuacion definimos las rutas:
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'coches', component: CochesComponent},
  { path: 'articulos', component: ArticulosComponent},
  { path: '**', redirectTo: 'home'},

];

//Linea importante:
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
