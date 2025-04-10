import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../api.service';
import {BuilderComponent} from '../../components/cms/builder/builder.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    BuilderComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  strapiData = []

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('url') ?? '';
      this.apiService.getPostData(id).subscribe(res => {
        this.strapiData = res.data[0].zone;
        this.titleService.setTitle('CraftFire - ' + res.data[0].settings.title);
        this.metaService.addTag({name: 'description', content: res.data[0].settings.description});
      });
    });
  }
}
