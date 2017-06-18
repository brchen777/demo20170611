import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { fullbackRoute } from './shared/fullback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { ClassicComponent } from './forms/classic/classic.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'forms/classic', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      { path: 'cards/:type', component: CardsComponent },
      { path: 'charts', loadChildren: './charts/charts.module.ts#ChartsModule' },
      { path: 'forms/classic', component: ClassicComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  fullbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
