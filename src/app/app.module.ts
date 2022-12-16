import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

// aplikacja
import { AppComponent } from './app.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// interfaces
import { Building } from './model/building';

// services
import { BuildingsService } from './services/buildings.service';

// sites
import { BuildingsComponent } from './sites/buildings/buildings.component';
import { BuildingsViewListComponent } from './sites/buildings/view-list/buildings-view-list.component';
import { BuildingsAddComponent } from './sites/buildings/add/buildings-add.component';

import { MaterialsComponent } from './sites/materials/materials.component';

import { ProducersComponent } from './sites/producers/producers.component';
import { ProducersAddComponent } from './sites/producers/add/producers-add.component';
import { BuilingFormComponent } from './components/builing-form/builing-form.component';
import { BuildingsEditComponent } from './sites/buildings/edit/buildings-edit.component';

const routes: Routes = [
  { path: 'buildings', component: BuildingsViewListComponent },
  { path: 'buildings/add', component: BuildingsAddComponent },
  { path: 'buildings/edit/:id', component: BuildingsAddComponent },
  { path: 'producers', component: ProducersComponent },
  { path: 'materials', component: MaterialsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    BuildingsAddComponent,
    BuildingsEditComponent,
    BuildingsViewListComponent,
    MaterialsComponent,
    ProducersComponent,
    ProducersAddComponent,
    BuilingFormComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BuildingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
