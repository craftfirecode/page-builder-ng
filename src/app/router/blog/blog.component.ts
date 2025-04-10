import {Component, OnInit} from '@angular/core';
import {BuilderComponent} from "../../components/cms/builder/builder.component";
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-blog',
  imports: [
    BuilderComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  strapiData = []

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('url') ?? '';
      this.apiService.getBlogData(id).subscribe(res => {
        this.strapiData = res.data[0].zone;
        this.titleService.setTitle('CraftFire - ' + res.data[0].settings.title);
        this.metaService.addTag({name: 'description', content: res.data[0].settings.description});
      });
    });
  }
}
