import { Routes } from '@angular/router';
import { TestComponent } from './router/test/test.component';
import { IndexComponent } from './router/index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':pageName', component: TestComponent },
];
