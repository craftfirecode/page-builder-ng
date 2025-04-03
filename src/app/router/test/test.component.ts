import {Component, OnInit} from '@angular/core';
import {ApiComponent} from '../../api/api.component';
import {HttpClient} from '@angular/common/http';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [
    ApiComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  id: string | null = null;

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute) {
    this.titleService.setTitle('Mein Seitentitel');
    this.metaService.addTag({ name: 'description', content: 'Meine Seitenbeschreibung' });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }
}
