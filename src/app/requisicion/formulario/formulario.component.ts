import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { requisicion } from 'src/app/codigo.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  constructor(
    public listRef: MatDialogRef<FormularioComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: requisicion) {}


  cancelar() {
    this.listRef.close();
  }


  ngOnInit() { }
}