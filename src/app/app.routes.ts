import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MyListComponent } from './my-list/my-list.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'mia-lista', component: MyListComponent },
];

