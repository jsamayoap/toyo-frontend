import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { DoctoresComponent } from './doctores/doctores.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DialogAddDoctorComponent } from './dialog-add-doctor/dialog-add-doctor.component';

const MaterialModules = [
  MatSidenavModule,
  MatTreeModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  HttpClientModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    DoctoresComponent,
    PacientesComponent,
    DialogAddDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
