// Model Version
export class Version {
  id: number;
  numero: number;
  fechaCreacion: string;
  creadoPor: string;
  imagen: string;
  url: string;
  esFinal: boolean;
}

export class CrearVersionModel {
  nombre: string;
  consecutivo: number;
  creado_por: string;
  fechaCreacion: string;
  descripcion: string;
  archivos: string[];
}
