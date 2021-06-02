import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { HeroDetailComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'heroes', 
    component: HeroesComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardsComponent 
  },
  { 
    path: 'detail/:id', 
    component: HeroDetailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
