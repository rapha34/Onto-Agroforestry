import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

export interface PlotInfo {
  id: number;
  prefLabel: string;
}

const Url = '<http://www.afy.fr/AgroforestryVoc/caf_27>';
let UrlHex = '';
for (let i = 0; i < Url.length; i++) {
      UrlHex += Url.charCodeAt(i).toString(16);
    }

// export const searchUrl = 'http://127.0.0.1:8085/AgroforestryWebService/api_agroforestry/plots/' + UrlHex ;
export const searchUrl = 'http://127.0.0.1:8085/AgroforestryWebService/api_agroforestry/plots/list' ;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-refresh':  'true'
  })
};

function createHttpOptions(packageName: string) {
    // npm package name search api
    // e.g., http://npmsearch.com/query?q=dom'
    const params = new HttpParams({ fromObject: { q: packageName } });
    return {params };
}

@Injectable()
export class PackageSearchService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  search(packageName: string): Observable<PlotInfo[]> {
    // clear if no pkg name
    if (!packageName.trim()) { return of([]); }

    const options = createHttpOptions(packageName);

    // TODO: Add error handling
    return this.http.get(searchUrl).pipe(
      map((data: any) => {
        return data.map((entry: any) => ({
          id: entry.id,
          prefLabel: entry.prefLabel,
          } as PlotInfo )
        );
      }),
      catchError(this.handleError('search', []))
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
