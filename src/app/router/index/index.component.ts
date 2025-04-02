import { Component } from '@angular/core';
import {ApiComponent} from '../../api/api.component';

@Component({
  selector: 'app-index',
  imports: [
    ApiComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
