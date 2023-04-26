import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Presupuesto } from './clase.model';
import { IngresarPresupuestoComponent } from './ingresar-presupuesto/ingresar-presupuesto.component';


@Component({
  selector: 'app-listar-presupuesto',
  templateUrl: './listar-presupuesto.component.html',
})
export class ListarPresupuestoComponent {

  title = 'Presupuesto';

  columnas: string[] = ['id', 'articulo', 'cantidad', 'codigogasto', 'existencia', 'descripcion', 'fechasolicitud', 'costoTotal', 'precioPorProducto', 'borrar'];

  datos: Presupuesto[] = [new Presupuesto('tornillos',4, 9, 6, 'sin descipcion', '13/03/23', '-', ''),];

  ds = new MatTableDataSource<Presupuesto>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Presupuesto>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(IngresarPresupuestoComponent, {
      data: new Presupuesto('',0,0,0,'','','','')
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
      this.agregar(art);
    });
  }

  borrarFila(cod: number){
    if (confirm("Desea eliminarlo")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: Presupuesto) {
    this.datos.push(new Presupuesto(art.articulo, art.cantidad, art.codigogasto, art.existencia, art.descripcion, art.fechasolicitud, art.costoTotal, art.precioPorProducto));
    this.tabla1.renderRows();
  }

}
