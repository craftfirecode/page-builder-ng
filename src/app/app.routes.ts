import { Routes } from '@angular/router';
import {TestComponent} from './router/test/test.component';
import {AppComponent} from './app.component';
import {IndexComponent} from './router/index/index.component';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'test', component: TestComponent},
];
