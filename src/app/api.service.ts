import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.bffApiUrl;

  constructor(private http: HttpClient) {}

  getPageData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pages`, { params: { url: urlFilter } });
  }

  getSettingsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/navigation`);
  }

  getBlogListData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs`);
  }

  getBlogData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs`, { params: { url: urlFilter } });
  }

  getPostListData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts`);
  }

  getPostData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts`, { params: { url: urlFilter } });
  }
}
