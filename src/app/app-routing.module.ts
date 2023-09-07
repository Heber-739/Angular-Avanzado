import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicOneComponent } from './pages/graphic-one/graphic-one.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',component:PagesComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'progress',component:ProgressComponent},
    {path:'graphicOne',component:GraphicOneComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  ]},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
