import { Component } from '@angular/core';
import {ApiComponent} from '../../api/api.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  imports: [
    ApiComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Meine Index');
    this.metaService.addTag({ name: 'description', content: 'Meine Seitenbeschreibung' });
  }
}
