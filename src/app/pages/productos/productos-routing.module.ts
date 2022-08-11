import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamasElectricasComponent } from './camas-electricas/camas-electricas.component';
import { CamasManualesComponent } from './camas-manuales/camas-manuales.component';
import { TransporteComponent } from './transporte/transporte.component';
import { CamillasComponent } from './camillas/camillas.component';
import { InicioComponent } from '../inicio/inicio.component';
import { CarrosComponent } from './carros/carros.component';
import { PortasuerosComponent } from './portasueros/portasueros.component';
import { BiombosComponent } from './biombos/biombos.component';
import { MesasComponent } from './mesas/mesas.component';
import { CamaOrtopedicaComponent } from './cama-ortopedica/cama-ortopedica.component';
import { CamaTerapiaComponent } from './cama-terapia/cama-terapia.component';
import { TaburetesComponent } from './taburetes/taburetes.component';
import { PortaTubosComponent } from './porta-tubos/porta-tubos.component';
import { CunasComponent } from './cunas/cunas.component';
import { PedicuriaComponent } from './pedicuria/pedicuria.component';
import { KinesioComponent } from './kinesio/kinesio.component';
import { SillonesComponent } from './sillones/sillones.component';



const routes: Routes = [
  { path: 'productos/camasManuales', component: CamasManualesComponent},
  { path: 'productos/ortopedica', component: CamaOrtopedicaComponent},
  { path: 'productos/terapia', component: CamaTerapiaComponent},
  { path: 'productos/camasElectricas', component: CamasElectricasComponent},
  { path: 'productos/transporte', component: TransporteComponent},
  { path: 'productos/camillas', component: CamillasComponent},
  { path: 'productos/carros', component: CarrosComponent},
  { path: 'productos/portasueros', component: PortasuerosComponent},
  { path: 'productos/biombos', component: BiombosComponent},
  { path: 'productos/mesas', component: MesasComponent},
  { path: 'productos/taburetes', component: TaburetesComponent},
  { path: 'productos/portaTubos', component: PortaTubosComponent},
  { path: 'productos/cunas', component: CunasComponent},
  { path: 'productos/pedicuria', component: PedicuriaComponent},
  { path: 'productos/kinesiologia', component: KinesioComponent},
  { path: 'productos/sillones', component: SillonesComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
