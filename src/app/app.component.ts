import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiComponent} from './api/api.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'page-builder-ng';
}
