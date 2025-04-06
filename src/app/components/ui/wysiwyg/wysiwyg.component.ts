import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wysiwyg',
  imports: [],
  templateUrl: './wysiwyg.component.html',
  styleUrl: './wysiwyg.component.scss'
})

export class WysiwygComponent {
  @Input() data: any;
}
