import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LanguageChoiceComponent } from './language-choice/language-choice.component';
import { LayoutComponent } from './layout/layout.component';

import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { httpInterceptorProviders } from './http-interceptors';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { FormsModule } from '@angular/forms';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      MainMenuComponent,
      HomeComponent,
      HeaderComponent,
      LanguageChoiceComponent,
      LayoutComponent,
      TutorialsListComponent,
      TutorialDetailsComponent,
      AddTutorialComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      HttpClientModule,
      HttpClientXsrfModule.withOptions({
        cookieName: 'My-Xsrf-Cookie',
        headerName: 'My-Xsrf-Header',
      }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
   ],
   providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
