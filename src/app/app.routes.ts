import { Routes } from '@angular/router';
import { IndexComponent } from './router/index/index.component';
import {PortfolioListComponent} from './router/portfolio-list/portfolio-list.component';
import {PortfolioComponent} from './router/portfolio/portfolio.component';
import {BlogListComponent} from './router/blog-list/blog-list.component';
import {BlogComponent} from './router/blog/blog.component';
import {PageComponent} from './router/page/page.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'portfolio', component: PortfolioListComponent },
  { path: 'portfolio/:url', component: PortfolioComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:url', component: BlogComponent },
  { path: ':url', component: PageComponent }
];
