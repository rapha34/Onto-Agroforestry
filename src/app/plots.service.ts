import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {
  plots = [];

  addToPlots(plot) {
    this.plots.push(plot);
  }
  getPlots() {
    return this.plots;
  }

  clearPlots() {
    this.plots = [];
    return this.plots;
  }
constructor() { }

}
