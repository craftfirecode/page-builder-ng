import { Component } from '@angular/core';
import {ApiComponent} from '../../api/api.component';
import {HttpClient} from '@angular/common/http';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  imports: [
    ApiComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Mein Seitentitel');
    this.metaService.addTag({ name: 'description', content: 'Meine Seitenbeschreibung' });
  }
}
