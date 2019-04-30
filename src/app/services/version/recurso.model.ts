import { Red } from '../red/red';

// Modelo RecursoVersion
export class Recurso {
  id: string;
  nombre: string;
  archivo: string;
  thumbnail: string;
  fechaCreacion: Date;
  fechaUltimaModificacion: Date;
  tipo: string;
  descripcion: string;
}
