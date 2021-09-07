import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(private _http: HttpClient) { }

  getColaboradores(): Observable<any[]> {
    return this._http.get<any[]>(environment.jsonServerAPI + "employees");
  }

  updateColaboradores(colaboradores: string, id: number): Observable<any[]> {
    return this._http.patch<any>(environment.jsonServerAPI + "employees/" + id, JSON.stringify(colaboradores));
  }
}
