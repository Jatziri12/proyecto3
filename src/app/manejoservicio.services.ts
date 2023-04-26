import { Injectable } from "@angular/core";
import { autorizacion, categoria, codigoDeGasto, CodigoProductos, factoresDeConversion, listaDeAutorizacion, listaDePresupuesto, listaDeProductos, listaDeProListaDePre, medidas, productos, requisicion, usuario } from "./codigo.model";
import { codigodgastoService } from "./manejo.service";

@Injectable()
export class ManejoService{
   
    constructor(private codigodgastoService:codigodgastoService){ }
   
    //area de modificaciones
   
    guardarCodigoDeGasto(guardado:codigoDeGasto){
        return this.codigodgastoService.guardarCodigoDeGasto(guardado);
    }

    cargaCodigoDeGasto(){
        return this.codigodgastoService.cargaCodigoDeGasto();
    }

    guardarUsuario(guardado:usuario){
        return this.codigodgastoService.guardarUsuario(guardado);
    }

    cargaUsuario(){
        return this.codigodgastoService.cargaUsuario();
    }

    guardarListaDePresupuesto(guardado:listaDePresupuesto){
        return this.codigodgastoService.guardarListaDePresupuesto(guardado);
    }

    cargaListaDePresupuesto(){
        return this.codigodgastoService.cargaListaDePresupuesto();
    }

    guardarMedidas(guardado:medidas){
        return this.codigodgastoService.guardarMedidas(guardado);
    }

    cargaMedidas(){
        return this.codigodgastoService.cargaMedidas();
    }

    guardarCategoria(guardado:categoria){
        return this.codigodgastoService.guardarCategoria(guardado);
    }

    cargaCategoria(){
        return this.codigodgastoService.cargaCategoria();
    }

    guardarProductos(guardado:productos){
        return this.codigodgastoService.guardarProductos(guardado);
    }

    cargaProductos(){
        return this.codigodgastoService.cargaProductos();
    }

    guardarFactoresDeConversion(guardado:factoresDeConversion){
        return this.codigodgastoService.guardarFactoresDeConversion(guardado);
    }

    cargaFactoresDeConversion(){
        return this.codigodgastoService.cargaFactoresDeConversion();
    }

    guardarListaDeProductos(guardado:listaDeProductos){
        return this.codigodgastoService.guardarListaDeProductos(guardado);
    }

    cargaListaDeProductos(){
        return this.codigodgastoService.cargaListaDeProductos();
    }

    guardarRequisicion(guardado:requisicion){
        return this.codigodgastoService.guardarRequisicion(guardado);
    }

    cargaRequisicion(){
        return this.codigodgastoService.cargaRequisicion();
    }

    guardarCodigoProductos(guardado:CodigoProductos){
        return this.codigodgastoService.guardarCodigoProductos(guardado);
    }

    cargaCodigoProductos(){
        return this.codigodgastoService.cargaCodigoProductos();
    }

    guardarListaDeProListaDePre(guardado:listaDeProListaDePre){
        return this.codigodgastoService.guardarListaDeProListaDePre(guardado);
    }

    cargaListaDeProListaDePre(){
        return this.codigodgastoService.cargaListaDeProListaDePre();
    }

    guardarAutorizacion(guardado:autorizacion){
        return this.codigodgastoService.guardarAutorizacion(guardado);
    }

    cargaAutorizacion(){
        return this.codigodgastoService.cargaAutorizacion();
    }

    guardarListaDeAutorizacion(guardado:listaDeAutorizacion){
        return this.codigodgastoService.guardarListaDeAutorizacion(guardado);
    }

    cargaListaDeAutorizacion(){
        return this.codigodgastoService.cargaListaDeAutorizacion();
    }
}


