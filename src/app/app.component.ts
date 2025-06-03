import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {ApiService} from './api.service';
import {NgForOf} from '@angular/common';
import {LucideAngularModule} from 'lucide-angular';
import {BreadcrumbComponent} from './components/ui/breadcrumb/breadcrumb.component';

export interface StrapiData {
  id: number;
  label: string;
  description: string | null;
  icon: string;
  href: string;
  pageID: number;
  children: StrapiData[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatButtonModule, NgForOf, LucideAngularModule, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'page-builder-ng';
  strapiData: StrapiData[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getSettingsData().subscribe(res => {
      this.strapiData = res.data.top;
    });
  }
}
