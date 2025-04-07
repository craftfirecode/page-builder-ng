import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../api.service';
import {BadgeComponent} from '../../components/ui/badge/badge.component';

@Component({
  selector: 'app-portfolio-list',
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    BadgeComponent
  ],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss'
})
export class PortfolioListComponent implements OnInit {
  strapiData: any;

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private apiService: ApiService) {
    this.titleService.setTitle('Portfolio');
    this.metaService.addTag({name: 'description', content: 'Meine Seitenbeschreibung'});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService.getPostListData().subscribe(res => {
        this.strapiData = res.data;
      });
    });
  }
}
