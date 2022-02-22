import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from 'rxjs';
import { vaga } from './models/vagas.model';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) { }

  getVagas(): Observable<vaga[]> {
    return this._httpClient.get<vaga[]>(this.url)
  }
  cadastrarVaga(Vaga: vaga): Observable<vaga[]> {
    return this._httpClient.post<vaga[]>(this.url, vaga)
  }
  atualizarVaga(id: any ,vaga: vaga): Observable<vaga[]> {
    const urlAtualizar = '${this.url}/${id}';
    return this._httpClient.put<vaga[]>(this.url, vaga)
  }
  removerVaga(id: any): Observable<vaga[]> {
    const urlDeletar = '${this.url}/${id}';
    return this._httpClient.delete<vaga[]>(urlDeletar);
  }



}

