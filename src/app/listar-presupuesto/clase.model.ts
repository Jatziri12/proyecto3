export class Presupuesto {
    constructor(
      public articulo: string,
      public cantidad: number,
      public codigogasto: number,
      public existencia: number,
      public descripcion: string,
      public fechasolicitud: string,
      public costoTotal: string,
      public precioPorProducto: string,
    ) {}
  }
  