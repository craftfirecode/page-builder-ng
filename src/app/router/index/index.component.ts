import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Meine Index');
    this.metaService.addTag({ name: 'description', content: 'Meine Seitenbeschreibung' });
  }
}
