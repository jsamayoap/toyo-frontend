import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { IDoctor } from '../interfaces/iDoctor';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ServicesService } from '../services/services.service';
import { DialogAddDoctorComponent } from '../dialog-add-doctor/dialog-add-doctor.component';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {
  form!: FormGroup;
  dataSource = new MatTableDataSource<IDoctor>();
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private services : ServicesService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [null],
      nombre: [null],
      search: [null]
    });
  }

  ngOnInit(): void {
    this.getDoctores();
  }

  getDoctores() {
    //GET
    const vSource = [
      <IDoctor> { id: "1", nombre: "Uno"},
      <IDoctor> { id: "2", nombre: "Dos"},
      <IDoctor> { id: "3", nombre: "Tres"},
      <IDoctor> { id: "4", nombre: "Cuatro"},
      <IDoctor> { id: "5", nombre: "Cinco"},
    ];
    this.dataSource = new MatTableDataSource<IDoctor>(vSource);
    if (this.sort!!) this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  selectDoctor(element: IDoctor) {
    const dialogRef = this.dialog.open(DialogAddDoctorComponent, {
      width: '350px',
      disableClose: false,
      data: {
        title: "Editar Doctor",
        doctor: element
      }
    });

    dialogRef.afterClosed().subscribe((resp: boolean) => {
      if (resp) {
        this.getDoctores();
      }
    });
  }

  removeDoctor(element: IDoctor) {
    if (confirm('Borrar ' + element.nombre + ' ?')) {
      alert('borrado');
    }
  }

  addDoctor() {
    const dialogRef = this.dialog.open(DialogAddDoctorComponent, {
      width: '350px',
      disableClose: false,
      data: {
        title: "Agregar Doctor",
        doctor: null
      }
    });

    dialogRef.afterClosed().subscribe((resp: boolean) => {
      if (resp) {
        this.getDoctores();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
