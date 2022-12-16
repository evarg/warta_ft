import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Building } from '../model/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  apiURL: string = "http://warta_b.poligon/api/";
  dataSource: Building[] = [];

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get<any>(this.apiURL + 'buildings')
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiURL + "buildings", data);
  }

  get(id: number): Observable<any>{
    return this.http.get(this.apiURL + "buildings/" + id);
  }

}
