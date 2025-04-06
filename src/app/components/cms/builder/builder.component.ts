import {Component, Input} from '@angular/core';
import {WysiwygComponent} from '../../ui/wysiwyg/wysiwyg.component';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-builder',
  imports: [
    WysiwygComponent,
    NgSwitch,
    NgSwitchCase,
    NgForOf
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})

export class BuilderComponent {
  @Input() data: any;
}
