import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ComentarImagenService {

  COMENTARIO_EXISTENTE_URL = environment.apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentarios/';
  COMENTARIO_NUEVO_URL = environment.apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentariosnuevos/';

  constructor(private httpClient: HttpClient) { }

  guardarComentarioExistente(comentario:Comentario, id_v:number, id_r:number){
    const url = this.COMENTARIO_EXISTENTE_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
    return this.httpClient.post<Comentario>(url, JSON.stringify(comentario), httpOptions);
  }

  guardarComentarioNuevo(comentario:Comentario, id_v:number, id_r:number){
    const url = this.COMENTARIO_NUEVO_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
    return this.httpClient.post<Comentario>(url, JSON.stringify(comentario), httpOptions);
  }
}
