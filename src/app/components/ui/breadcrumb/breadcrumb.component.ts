import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    TitleCasePipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbSegments: string[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbSegments = this.getBreadcrumbSegments(this.router.url);
      console.log(this.breadcrumbSegments);
    });

    this.breadcrumbSegments = this.getBreadcrumbSegments(this.router.url);
    console.log(this.breadcrumbSegments);
  }

  buildLink(index: number): string | null {
    if (index === this.breadcrumbSegments.length - 1) {
      return null;
    }
    return '/' + this.breadcrumbSegments.slice(0, index + 1).join('/');
  }

  private getBreadcrumbSegments(url: string): string[] {
    return url.split('/').filter(segment => segment !== '');
  }
}
