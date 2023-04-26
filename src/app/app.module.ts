import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { RequisicionComponent } from './requisicion/requisicion.component';
import { MatCardModule } from '@angular/material/card';
import { MyMaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormularioComponent } from './requisicion/formulario/formulario.component';
import { ManejoService } from './manejoservicio.services';
import { codigodgastoService } from './manejo.service';
import { GenerarComponent } from './generar/generar.component';
import { ListarPresupuestoComponent } from './listar-presupuesto/listar-presupuesto.component';
import { IngresarPresupuestoComponent } from './listar-presupuesto/ingresar-presupuesto/ingresar-presupuesto.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneraComponent } from './generar/genera/genera.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaProductoComponent,
    RequisicionComponent,
    GeneraComponent,
    GenerarComponent,
    ListarPresupuestoComponent,
    IngresarPresupuestoComponent,
    AutorizacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MyMaterialModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'lista-producto', component: ListaProductoComponent },
      { path: 'requisicion', component: RequisicionComponent },
      { path: 'generar', component: GenerarComponent, children:[
        {path:':idDocumento',component:GenerarComponent}
      ] },
      { path: 'listar-presupuesto', component: ListarPresupuestoComponent },
      { path: 'autorizacion', component: AutorizacionComponent },
    ]),
  ],
  exports: [
    MatIconAnchor,
    MatIconButton,
    RouterModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [codigodgastoService, ManejoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
