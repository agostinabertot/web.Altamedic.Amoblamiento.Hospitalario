import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamasManualesComponent } from './camas-manuales/camas-manuales.component';
import { CamasElectricasComponent } from './camas-electricas/camas-electricas.component';
import { TransporteComponent } from './transporte/transporte.component';
import { CamillasComponent } from './camillas/camillas.component';
import { ProductosRoutingModule } from './productos-routing.module';
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




@NgModule({
  declarations: [CamasManualesComponent, CamasElectricasComponent, TransporteComponent, CamillasComponent, CarrosComponent, PortasuerosComponent, BiombosComponent, MesasComponent, CamaOrtopedicaComponent, CamaTerapiaComponent, TaburetesComponent, PortaTubosComponent, CunasComponent, PedicuriaComponent, KinesioComponent, SillonesComponent],
  exports: [CamasManualesComponent, CamasElectricasComponent, TransporteComponent, SillonesComponent, CamillasComponent, CarrosComponent, PortasuerosComponent, BiombosComponent, MesasComponent, CamaOrtopedicaComponent, CamaTerapiaComponent, TaburetesComponent, PortaTubosComponent, CunasComponent, PedicuriaComponent, KinesioComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
