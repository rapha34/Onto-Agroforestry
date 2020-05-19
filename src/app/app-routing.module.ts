import { ViewPlotsComponent } from './view-plots/view-plots.component';
import { ViewPlots2Component } from './view-plots2/view-plots2.component';
import { HomeComponent } from './home/home.component';
import { View2Component } from './view2/view2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

const routes: Routes = [];

@NgModule({
  declarations: [
      ViewPlotsComponent, ViewPlots2Component, View2Component
  ],
  imports: [NgbModule, CommonModule, RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'view-plots', component: ViewPlotsComponent },
    { path: 'view-plots2', component: ViewPlots2Component },
    { path: 'view2', component: View2Component },
    { path: 'tutorials', component: TutorialsListComponent },
    { path: 'tutorials/:id', component: TutorialDetailsComponent },
    { path: 'add', component: AddTutorialComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
