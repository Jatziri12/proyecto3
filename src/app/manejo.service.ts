import { autorizacion, categoria, codigoDeGasto, CodigoProductos, factoresDeConversion, listaDeAutorizacion, listaDePresupuesto, listaDeProductos, listaDeProListaDePre, medidas, productos, requisicion, usuario } from "./codigo.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders }from "@angular/common/http";


@Injectable()

export class codigodgastoService{
  constructor (private httpClient:HttpClient){ }
    cargaCodigoDeGasto(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restcodigoDeGasto.php";
        return this.httpClient.get(url);
    } 
    guardarCodigoDeGasto(guardado:codigoDeGasto){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restcodigoDeGasto.php";
        let dataPOST = {
            peticion:"guardar",
            idcodigo:guardado.idcodigo,
            codigo:guardado.codigo,
            descripcion:guardado.descripcion,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaUsuario(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restusuario.php";
        return this.httpClient.get(url);
    }  
    guardarUsuario(guardado:usuario){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restusuario.php";
        let dataPOST = {
            peticion:"guardar",
            idusuario:guardado.idusuario,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaListaDePresupuesto(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDePresupuesto.php";
        return this.httpClient.get(url);
    }  
    guardarListaDePresupuesto(guardado:listaDePresupuesto){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDePresupuesto.php";
        let dataPOST = {
            peticion:"guardar",
            idlistaDePresupuesto:guardado.idlistaDePresupuesto,
            fechaCreacion:guardado.fechaCreacion,
            fechaInicio:guardado.fechaInicio,
            fechaFinal:guardado.fechaFinal,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaMedidas(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restmedidas.php";
        return this.httpClient.get(url);
    }  
    guardarMedidas(guardado:medidas){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restmedidas.php";
        let dataPOST = {
            peticion:"guardar",
            idMedidas:guardado.idmedidas,
            nombre:guardado.nombre,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaCategoria(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restcategoria.php";
        return this.httpClient.get(url);
    }  
    guardarCategoria(guardado:categoria){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistacategoria.php";
        let dataPOST = {
            peticion:"guardar",
            idCategoria:guardado.idCategoria,
            nombre:guardado.nombre,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaProductos(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restproductos.php";
        return this.httpClient.get(url);
    }  
    guardarProductos(guardado:productos){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restproductos.php";
        let dataPOST = {
            peticion:"guardar",
            idProductos:guardado.idproductos,
            sku:guardado.sku,
            nombre:guardado.nombre,
            descripcion:guardado.descripcion,
            volumen:guardado.volumen,
            existencia:guardado.existencia,
            tipo:guardado.tipo,
            estado:guardado.estado,
            idMedidad:guardado.idmedidas,
            idCategoria:guardado.idcategoria,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaFactoresDeConversion(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restfactoresDeConversion.php";
        return this.httpClient.get(url);
    }  
    guardarFactoresDeConversion(guardado:factoresDeConversion){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restfactoresDeConversion.php";
        let dataPOST = {
            peticion:"guardar",
            idFactoresDeConversion:guardado.idfactoresDeConversion,
            valor:guardado.valor,
            idMedidas:guardado.idmedidas,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaListaDeProductos(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeProductos.php";
        return this.httpClient.get(url);
    }  
    guardarListaDeProductos(guardado:listaDeProductos){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeProductos.php";
        let dataPOST = {
            peticion:"guardar",
            idListaDeProductos:guardado.idlistaDeProductos,
            cantidad:guardado.cantidad,
            idProductos:guardado.idproductos,
            idRequisicion:guardado.idrequisicion,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaRequisicion(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restrequisicion.php";
        return this.httpClient.get(url);
    }  
    guardarRequisicion(guardado:requisicion){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restrequisicion.php";
        let dataPOST = {
            peticion:"guardar",
            idRequisicion:guardado.idrequisicion,
            fecha:guardado.fecha,
            prioridad:guardado.prioridad,
            idUsuario:guardado.idusuario,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaCodigoProductos(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restCodigoProductos.php";
        return this.httpClient.get(url);
    }  
    guardarCodigoProductos(guardado:CodigoProductos){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restCodigoProductos.php";
        let dataPOST = {
            peticion:"guardar",
            idCodigoProductos:guardado.idCodigoProductos,
            idListDeProductos:guardado.idlistDeProductos,
            idCodigoDeGasto:guardado.idcodigoDeGasto,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaListaDeProListaDePre(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeProListaDePre.php";
        return this.httpClient.get(url);
    }  
    guardarListaDeProListaDePre(guardado:listaDeProListaDePre){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeProListaDePre.php";
        let dataPOST = {
            peticion:"guardar",
            idListaDeProListaDePre:guardado.idllistaDeProListaDePre,
            cantidad:guardado.cantidad,
            idListaDeProductos:guardado.idlistaDeProductos,
            idListaDePresupuesto:guardado.listaDePresupuesto,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaAutorizacion(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restautorizacion.php";
        return this.httpClient.get(url);
    }  
    guardarAutorizacion(guardado:autorizacion){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restautorizacion.php";
        let dataPOST = {
            peticion:"guardar",
            idAutorizacion:guardado.idautorizacion,
            fecha:guardado.fecha,
            idUsuario:guardado.idusuario,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }

    cargaListaDeAutorizacion(){
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeAutorizacion.php";
        return this.httpClient.get(url);
    }  
    guardarListaDeAutorizacion(guardado:listaDeAutorizacion){
        let httpHeaders = new HttpHeaders()
        .set ('Content--Type', 'application/json');
        let url = "https://dev.forzaglobal.com/articulos/ServicioWeb/restlistaDeAutorizacion.php";
        let dataPOST = {
            peticion:"guardar",
            idListaDeAutorizacion:guardado.idlistaDeAutorizacion,
            total:guardado.total,
            idAutorizacion:guardado.idautorizacion,
        };
        return this.httpClient.post(url,dataPOST,{headers:httpHeaders});
    }
}