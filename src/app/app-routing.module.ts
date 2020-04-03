import { HomeComponent } from './home/home.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  declarations: [
    View1Component, View2Component
  ],
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'view1', component: View1Component },
    { path: 'view2', component: View2Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
