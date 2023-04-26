import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { requisicion } from '../codigo.model';
import { ManejoService } from '../manejoservicio.services';
import { RequisicionService } from '../service/requisicion.service';
import { FormularioComponent } from './formulario/formulario.component';


@Component({
  selector: 'app-requisicion',
  templateUrl: './requisicion.component.html',
  styleUrls: ['./requisicion.component.css']
})

export class RequisicionComponent implements OnInit {

  title = 'Requisicion';

  columnas: string[] = ['idrequisicion', 'fecha', 'prioridad', 'precioTotal', 'critico', 'idusuario', 'borrar'];

  datos: requisicion[] = [new requisicion(0, '-', 0, '-', '-', 0),];

  ds = new MatTableDataSource<requisicion>(this.datos);

  @ViewChild(MatTable, { static: true }) tabla1!: MatTable<requisicion>;


  constructor(public dialog: MatDialog,
    private manejoService:ManejoService) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(FormularioComponent, {
      data: new requisicion(0,'',0,'','',0)
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

  agregar(art: requisicion) {
    this.datos.push(new requisicion(art.idrequisicion, art.fecha, art.prioridad, art.precioTotal, art.critico, art.idusuario));
    this.tabla1.renderRows();
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

/*@Component({
  selector: 'emisor',
  template: `
    <button (click)="emitirValor()">Enviar valor aleatorio</button>
  `,  
})


export class EmisorComponent  {
    
  constructor(public requisicionService: RequisicionService) {  }

  public emitirValor() {
    this.requisicionService.enviar(Date.now());
  }
}*/