import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctoresComponent } from './doctores/doctores.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  { path: 'doctores', component: DoctoresComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: '', component: DoctoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
