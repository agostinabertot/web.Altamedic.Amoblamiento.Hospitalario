import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnmatComponent } from './anmat/anmat.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'nosotros/anmat', component: AnmatComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'success', component: SuccessComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
