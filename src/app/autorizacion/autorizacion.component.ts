import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { autorizacion } from "../codigo.model";
import { ManejoService } from "../manejoservicio.services";

@Component({
    selector: 'app-autorizacion',
    templateUrl: './autorizacion.component.html'
  })

export class AutorizacionComponent implements OnInit{

  columna: string[] = ['idautorizacion', 'fecha', 'cantidadProducto', 'total', 'idusuario', 'borrar'];

  datos: autorizacion[] = [new autorizacion(0, '-', '-', 0),];

  dataSource = new MatTableDataSource<autorizacion>(this.datos);

  @ViewChild(MatTable) tabla2!: MatTable<autorizacion>;
  

  constructor(private manejoService:ManejoService) { }


  borrarFila(cod: number){
    if (confirm("Desea eliminarlo")) {
      this.datos.splice(cod, 1);
      this.tabla2.renderRows();
    }
  }

  ngOnInit(){
    this.manejoService.cargaCodigoDeGasto().subscribe({
      next: (response:any) => {
        console.log((response))
        },
      error: (error:any) => {
        console.error((error))
      },
      complete:() => {
        console.log("completo")
      },
    });   
  }
}