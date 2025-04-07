import {Component, Input} from '@angular/core';
import {ImageComponent} from '../image/image.component';
import {WysiwygComponent} from '../wysiwyg/wysiwyg.component';
import {RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-image-wysiwyg',
  imports: [
    ImageComponent,
    WysiwygComponent,
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './image-wysiwyg.component.html',
  styleUrl: './image-wysiwyg.component.scss'
})
export class ImageWysiwygComponent {
  @Input() data: any;

  constructor() {
  }
}
