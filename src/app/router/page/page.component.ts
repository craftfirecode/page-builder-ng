import {Component, OnInit} from '@angular/core';
import {BuilderComponent} from "../../components/cms/builder/builder.component";
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-page',
  imports: [
    BuilderComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  strapiData = []

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
    this.titleService.setTitle('Mein Seitentitel');
    this.metaService.addTag({name: 'description', content: 'Meine Seitenbeschreibung'});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('url') ?? '';
      this.apiService.getPageData(id).subscribe(res => {
        this.strapiData = res.data[0].zone;
        this.titleService.setTitle('CraftFire - ' + res.data[0].settings.title);
        this.metaService.addTag({name: 'description', content: res.data[0].settings.description});
      });
    });
  }
}
