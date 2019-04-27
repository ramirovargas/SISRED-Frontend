import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  guardarComentarioExistente(contenido:String, usuario:number, idTabla:number, id_v:number, id_r:number){
    const url = this.COMENTARIO_EXISTENTE_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
    var obj = {contenido, usuario, idTabla}
    return this.httpClient.post<Comentario>(url, JSON.stringify(obj), httpOptions);
  }

  guardarComentarioNuevo(contenido:String, usuario:number, x1:number, x2:number, y1:number, y2:number, id_v:number, id_r:number){
    const url = this.COMENTARIO_NUEVO_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
    var obj = {contenido, usuario, x1, x2, y1, y2}
    return this.httpClient.post<Comentario>(url, JSON.stringify(obj), httpOptions);
  }
}
