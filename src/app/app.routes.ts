import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MyListComponent } from './my-list/my-list.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      },
      { path: 'mia-lista', component: MyListComponent },
    ],
  },
];
