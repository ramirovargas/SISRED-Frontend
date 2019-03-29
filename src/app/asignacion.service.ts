import { Injectable } from '@angular/core';
import { RolAsignado } from './rolAsignado';
import { ASIGNACIONES } from './mock-asignaciones';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  constructor() { }

  getAsignaciones(): Observable<RolAsignado[]> {
    return of(ASIGNACIONES);
  }
}
