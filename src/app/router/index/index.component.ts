import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';
import {BuilderComponent} from '../../components/cms/builder/builder.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  imports: [
    BuilderComponent
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  strapiData = []

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
    this.titleService.setTitle('CraftFire');
    this.metaService.addTag({name: 'description', content: 'CraftFire UX/UI & Frontend Developer'});
  }

  ngOnInit(): void {
    this.apiService.getPageData('index').subscribe(res => {
      this.strapiData = res.data[0].zone;
      console.log(this.strapiData);
    });
  }
}
