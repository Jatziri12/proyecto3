import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ManejoService } from 'src/app/manejoservicio.services';
import { requisicion } from '../codigo.model';
import { RequisicionService } from '../service/requisicion.service';
import { Doc } from './class.module';
import { GeneraComponent } from './genera/genera.component';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.component.html'
})
export class GenerarComponent implements OnInit{

  columnas: string[] = ['id', 'cantidadTotal', 'cantidadProducto', 'cantidadM', 'medida', 'borrar'];

  dato: Doc[] = [new Doc('ls', 'as', 'b', 'c'),];

  dataS = new MatTableDataSource<Doc>(this.dato);

  @ViewChild(MatTable) tabla2!: MatTable<Doc>;
  idDocumento:string = "1";

 //idDocumento: string = ""; 

  constructor(public dialog: MatDialog,
    private manejoService:ManejoService,
    private ActivedRoute:ActivatedRoute) { 
      console.log("constructor");
      this.ActivedRoute.params.subscribe(
        params=>{
          console.log("UsrId: "+JSON.stringify(params));
            this.idDocumento = params['idDocumento'];
        }
      );
      
    }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(GeneraComponent, {
      data: new Doc('','','','')
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
      this.agregar(art);
    });
  }

  borrarFila(cod: number){
    if (confirm("Desea eliminarlo")) {
      this.dato.splice(cod, 1);
      this.tabla2.renderRows();
    }
  }

  agregar(art: Doc) {
    this.dato.push(new Doc(art.cantidadTotal, art.cantidadProducto, art.cantidadM, art.medida));
    this.tabla2.renderRows();
  }

  ngOnInit(){
    
    this.manejoService.cargaCodigoProductos().subscribe({
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