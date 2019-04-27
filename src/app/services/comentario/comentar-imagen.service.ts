import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarImagenService {

  COMENTARIO_EXISTENTE_URL = environment.apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentarios/';
  COMENTARIO_NUEVO_URL = environment.apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentariosnuevos/';

  constructor(private httpClient: HttpClient) { }
}
