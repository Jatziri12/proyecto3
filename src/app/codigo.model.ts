export class codigoDeGasto{
    constructor(
        public idcodigo: number,
        public codigo: string,
        public descripcion:string,
    ){}
}

export class usuario{
    constructor(
        public idusuario: number,
    ){}
}

export class listaDePresupuesto{
    constructor(
        public idlistaDePresupuesto: number,
        public fechaCreacion: Date,
        public fechaInicio: Date,
        public fechaFinal: Date,
    ){}
}

export class medidas{
    constructor(
        public idmedidas: number,
        public nombre: string,
    ){}
}

export class categoria{
    constructor(
        public idCategoria: number,
        public nombre: string,
    ){}
}

export class productos {
    constructor(
        public idproductos: number,
        public  sku: string,
        public nombre: string,
        public descripcion: string,
        public volumen: string,
        public existencia: number,
        public tipo: string,
        public estado: number,
        public idcategoria: number,
        public idmedidas: number,
    ){}
}

export class factoresDeConversion{
    constructor(
        public idfactoresDeConversion: number,
        public valor: string,
        public idmedidas: number,
    ){}
}

export class listaDeProductos{
    constructor(
        public idlistaDeProductos: number,
        public cantidad: string,
        public productos: string,
        public unidadDeMedida: string,
        public precioDeProducto: string,
        public critico:string,
        public idproductos: number,
        public idrequisicion:number,
    ){}
}

export class requisicion{
    constructor(
        public idrequisicion: number,
        public fecha: string,
        public prioridad: number,
        public precioTotal: string,
        public critico: string,
        public idusuario: number,
    ){}
}

export class CodigoProductos{
    constructor(
        public idCodigoProductos: number,
        public idlistDeProductos: number,
        public idcodigoDeGasto: number,
    ){}
}

export class listaDeProListaDePre{
    constructor(
        public idllistaDeProListaDePre: number,
        public cantidad: string,
        public idlistaDeProductos: number,
        public listaDePresupuesto: number,
    ){}
}

export class autorizacion{
    constructor(
        public idautorizacion: number,
        public fecha: string,
        public total: string,
        public idusuario: number,
    ){}
}

export class listaDeAutorizacion{
    constructor(
        public idlistaDeAutorizacion: number,
        public total: string,
        public idautorizacion: number,
    ){}
}