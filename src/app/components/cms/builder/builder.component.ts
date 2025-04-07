import {Component, Input} from '@angular/core';
import {WysiwygComponent} from '../../ui/wysiwyg/wysiwyg.component';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {ImageComponent} from '../../ui/image/image.component';
import {ImageWysiwygComponent} from '../../ui/image-wysiwyg/image-wysiwyg.component';
import {SpaceComponent} from '../../ui/space/space.component';
import {LinkComponent} from '../../ui/link/link.component';

@Component({
  selector: 'app-builder',
  imports: [
    WysiwygComponent,
    NgSwitch,
    NgSwitchCase,
    NgForOf,
    ImageComponent,
    ImageWysiwygComponent,
    SpaceComponent,
    LinkComponent
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})

export class BuilderComponent {
  @Input() data: any;
}
