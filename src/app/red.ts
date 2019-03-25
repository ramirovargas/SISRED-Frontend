import { RolAsignado } from './RolAsignado';

export class Red {
  codigo: string;
  nombre: string;
  nombreCorto: string;
  descripcion: string;
  fechaInicio: string;
  fechaCierre: string;
  fechaCreacion: string;
  porcentajeAvance: number;
  tipo: string;
  solicitante: string;
  horasTrabajadas: number;
  horasEstimadas: number;
  rolesAsignados: RolAsignado[] | undefined;
  
}