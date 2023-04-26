import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { listaDeProductos } from '../codigo.model';
import { RequisicionService } from '../service/requisicion.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {

    displayedColumns: string[] = ['idlistaDeProductos', 'cantidad', 'productos', 'unidadDeMedida', 'precioDeProducto', 'critico', 'idproductos', 'idrequisicion'];
    
    dato: listaDeProductos[] = [new listaDeProductos(0, '', '', '', '', '', 0, 0),];

    dataSource = new MatTableDataSource<listaDeProductos>(this.dato);

    @ViewChild(MatTable, { static: true }) tabla2!: MatTable<listaDeProductos>;

    constructor(){}
}

/*@Component({
  selector: 'receptor',
  template: `
    Valor Recibido {{ valorEmitido }}
  `,  
})
export class ReceptorComponent  {
  
  public valorEmitido = this.requisicionService.recibir;

  constructor(public requisicionService: RequisicionService) {  }

}*/
