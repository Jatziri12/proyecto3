import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Presupuesto } from '../clase.model';



@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html'
})
export class IngresarPresupuestoComponent implements OnInit{

  constructor(
    public listRef: MatDialogRef<IngresarPresupuestoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Presupuesto) {}
  
  ngOnInit() { }

  cancelar() {
    this.listRef.close();
  }


}
