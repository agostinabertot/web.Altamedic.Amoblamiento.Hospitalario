import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamasManualesComponent } from './camas-manuales/camas-manuales.component';
import { CamasElectricasComponent } from './camas-electricas/camas-electricas.component';
import { TransporteComponent } from './transporte/transporte.component';
import { CamillasComponent } from './camillas/camillas.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { CarrosComponent } from './carros/carros.component';



@NgModule({
  declarations: [CamasManualesComponent, CamasElectricasComponent, TransporteComponent, CamillasComponent, CarrosComponent],
  exports: [CamasManualesComponent, CamasElectricasComponent, TransporteComponent, CamillasComponent, CarrosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
