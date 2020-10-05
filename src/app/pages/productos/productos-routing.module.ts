import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamasElectricasComponent } from './camas-electricas/camas-electricas.component';
import { CamasManualesComponent } from './camas-manuales/camas-manuales.component';
import { TransporteComponent } from './transporte/transporte.component';
import { CamillasComponent } from './camillas/camillas.component';
import { InicioComponent } from '../inicio/inicio.component';
import { CarrosComponent } from './carros/carros.component';


const routes: Routes = [
  { path: 'productos/camasManuales', component: CamasManualesComponent},
  { path: 'productos/camasElectricas', component: CamasElectricasComponent},
  { path: 'productos/transporte', component: TransporteComponent},
  { path: 'productos/camillas', component: CamillasComponent},
  { path: 'productos/carros', component: CarrosComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
