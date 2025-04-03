import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [
    JsonPipe
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  strapiData = []

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
    this.titleService.setTitle('Mein Seitentitel');
    this.metaService.addTag({ name: 'description', content: 'Meine Seitenbeschreibung' });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.apiService.getPageData(id).subscribe(res => {
        this.strapiData = res.data[0].zone;
      });
    });
  }
}
