import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.stapiUrl;
  private apiKey = environment.stapiApi;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/1");
  }

  getPageData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/pages?filters[url][$eq]=${urlFilter}&customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

  getSettingsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/navigation?customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

  getBlogListData(): Observable<any> {
    return this.http.get<any>(`/api/blogs?customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

  getBlogData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`/api/blogs?filters[url][$eq]=${urlFilter}&customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

  getPostListData(): Observable<any> {
    return this.http.get<any>(`/api/posts?customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

  getPostData(urlFilter: string): Observable<any> {
    return this.http.get<any>(`/api/posts?filters[url][$eq]=${urlFilter}&customPopulate=nested`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    });
  }

}
