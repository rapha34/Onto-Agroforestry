import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      MainMenuComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
