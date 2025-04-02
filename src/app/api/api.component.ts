import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api',
    imports: [
        JsonPipe
    ],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  data = []

  constructor(private http: HttpClient) {
    http.get<any>('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
