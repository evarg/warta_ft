import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './sites/buildings/buildings.component';
import { MaterialsComponent } from './sites/materials/materials.component';
import { ProducersComponent } from './sites/producers/producers.component';

const routes: Routes = [
  { path: 'buildings', component: BuildingsComponent },
  { path: 'producers', component: ProducersComponent },
  { path: 'materials', component: MaterialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
