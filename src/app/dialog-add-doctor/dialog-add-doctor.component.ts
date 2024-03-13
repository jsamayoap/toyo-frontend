
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ServicesService } from '../services/services.service';
import { IDoctor } from '../interfaces/iDoctor';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-doctor',
  templateUrl: './dialog-add-doctor.component.html',
  styleUrls: ['./dialog-add-doctor.component.css']
})
export class DialogAddDoctorComponent implements OnInit {
  isLoaded = false;
  title:string = "Cargando...";
  id = new FormControl('');
  nombre = new FormControl('');
  selected: IDoctor = { id: "", nombre: "" };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAddDoctorComponent>,
    private services : ServicesService,
  ) {
    //Parameters
    this.title = String(this.data.title);
    if (this.data.doctor != null) {
      this.selected = this.data.doctor;
      this.id.setValue(this.selected.id);
      this.nombre.setValue(this.selected.nombre);
    }
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  doAgregarDoctor() {
    const vSave = <IDoctor> {
      id: "1",
      nombre: "Hola"
    }

    /*
    this.services.saveDoctor(vSave).subscribe((resp:any) => {
      if (resp.status === 200 || resp.status === 201) {

        this.close(true);
      } else {
        alert('error');
      }
    });
    */
  }

  close(reload: boolean): void {
    this.dialogRef.close(reload);
  }

}
