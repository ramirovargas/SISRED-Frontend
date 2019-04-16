import { Red } from '../red/red';
import { Recurso } from './recurso.model';

// Modelo VersionRed
export class Version {
  id: string;
  numero: string;
  imagen: string;
  red: Red| undefined;
  recursos: Recurso[] | undefined
}
