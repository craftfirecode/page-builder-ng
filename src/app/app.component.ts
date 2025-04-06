import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {ApiService} from './api.service';
import {NgForOf} from '@angular/common';

export interface StrapiData {
  id: number;
  label: string;
  description: string | null;
  icon: string;
  to: string;
  children: StrapiData[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatButtonModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'page-builder-ng';
  showFiller = false;
  strapiData: StrapiData[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getSettingsData().subscribe(res => {
      this.strapiData = res.data.top;
    });
  }
}
