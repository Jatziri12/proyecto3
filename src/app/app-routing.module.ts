import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutorizacionComponent } from "./autorizacion/autorizacion.component";
import { GenerarComponent } from "./generar/generar.component";
import { ListaProductoComponent } from "./lista-producto/lista-producto.component";
import { ListarPresupuestoComponent } from "./listar-presupuesto/listar-presupuesto.component";
import { RequisicionComponent } from "./requisicion/requisicion.component";

const routes: Routes = [
    { path: 'lista-producto', component: ListaProductoComponent },
    { path: 'requisicion', component: RequisicionComponent },
    { path: 'generar/:id', component: GenerarComponent},
    { path: 'listar-presupuesto', component: ListarPresupuestoComponent },
    { path: 'autorizacion', component: AutorizacionComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {}

