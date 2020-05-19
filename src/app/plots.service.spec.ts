/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlotsService } from './plots.service';

describe('Service: Plots', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotsService]
    });
  });

  it('should ...', inject([PlotsService], (service: PlotsService) => {
    expect(service).toBeTruthy();
  }));
});
