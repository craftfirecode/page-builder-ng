import { Component } from '@angular/core';
import {ApiComponent} from '../../api/api.component';

@Component({
  selector: 'app-test',
  imports: [
    ApiComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
