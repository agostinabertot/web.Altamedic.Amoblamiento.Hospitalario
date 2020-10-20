import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { AnmatComponent } from './anmat/anmat.component';




@NgModule({
  declarations: [ InicioComponent, ContactoComponent, NosotrosComponent, ServiciosComponent, AnmatComponent],
  exports: [ InicioComponent, ContactoComponent, NosotrosComponent, ServiciosComponent, AnmatComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
