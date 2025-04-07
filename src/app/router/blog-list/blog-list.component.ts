import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BadgeComponent} from "../../components/ui/badge/badge.component";
import {NgForOf, NgIf} from "@angular/common";
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../api.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-blog-list',
  imports: [
    RouterLink,
    BadgeComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  strapiData: any;
  protected readonly environment = environment;

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
    this.titleService.setTitle('Portfolio');
    this.metaService.addTag({name: 'description', content: 'Meine Seitenbeschreibung'});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService.getBlogListData().subscribe(res => {
        this.strapiData = res.data;
      });
    });
  }
}
