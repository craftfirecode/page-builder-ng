import {Component, Input} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() data: any;

  constructor() {}

  getImageUrl(url: string): string {
    return `${environment.apiUrl}${url}`;
  }
}
