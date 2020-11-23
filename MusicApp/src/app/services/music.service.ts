import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Album from 'app/model/album';
import { environment } from 'environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${environment.baseUrl}album`)
  }

  public getAlbumDetail(id: String): Observable<Album>{
    return this.http.get<Album>(`${environment.baseUrl}album/${id}`)
  }

}
