import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-api',
  imports: [
    JsonPipe,
    MatButton,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent implements OnInit {
  data = []
  dayName: string | undefined;

  constructor(private http: HttpClient) {
    http.get<any>('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }

  ngOnInit(): void {
    const day: number = new Date().getDay();
    switch (day) {
      case 0:
        this.dayName = 'Sunday';
        break;
      case 1:
        this.dayName = 'Monday';
        break;
      case 2:
        this.dayName = 'Tuesday';
        break;
      case 3:
        this.dayName = 'Wednesday';
        break;
      case 4:
        this.dayName = 'Thursday';
        break;
      case 5:
        this.dayName = 'Friday';
        break;
      case 6:
        this.dayName = 'Saturday';
        break;
      default:
        this.dayName = 'Invalid day';
    }
  }

}
