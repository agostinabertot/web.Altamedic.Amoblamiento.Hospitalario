import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnmatComponent } from './anmat/anmat.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';

const components = [
  InicioComponent,
  ContactoComponent,
  NosotrosComponent,
  ServiciosComponent,
  AnmatComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
