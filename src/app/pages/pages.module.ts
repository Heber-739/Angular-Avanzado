import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicOneComponent } from './graphic-one/graphic-one.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent
  ]
})
export class PagesModule { }
