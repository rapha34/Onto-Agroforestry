import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Plot } from './plot';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class ViewPlotsService {
  plotsUrl = 'http://127.0.0.1:8085/AgroforestryWebService/api_agroforestry/plots/list';  // URL to web api
  private handleError: HandleError;

constructor(
  private http: HttpClient,
  httpErrorHandler: HttpErrorHandler) {
  this.handleError = httpErrorHandler.createHandleError('ViewPlotsService');
  }

  /** GET plots from the server */
  getPlots(): Observable<Plot[]> {
    return this.http.get<Plot[]>(this.plotsUrl)
      .pipe(
        catchError(this.handleError('getPlots', []))
      );
  }
}
