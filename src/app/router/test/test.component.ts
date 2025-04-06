import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';
import {BuilderComponent} from '../../components/ui/builder/builder.component';

@Component({
  selector: 'app-test',
  imports: [
    BuilderComponent
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
      const id = params.get('pageName') ?? '';
      this.apiService.getPageData(id).subscribe(res => {
        this.strapiData = res.data[0].zone;
      });
    });
  }
}
