import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { NpmPackageInfo, PackageSearchService } from './view-plots2.service';

@Component({
  selector: 'app-view-plots2',
  templateUrl: './view-plots2.component.html',
  providers: [ PackageSearchService ]
})
export class ViewPlots2Component implements OnInit {
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();

  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.search(packageName))
    );
  }

  constructor(private searchService: PackageSearchService) { }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
