import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    // ChartsModule 要放在 AppRoutingModule 的上方避免被 app-routing 當成 other case
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
