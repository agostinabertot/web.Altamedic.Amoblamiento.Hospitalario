import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AnmatComponent } from './anmat/anmat.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'nosotros/anmat', component: AnmatComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
