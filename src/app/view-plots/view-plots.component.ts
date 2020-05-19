import { Component, OnInit } from '@angular/core';
import { Plot } from './plot';
import { ViewPlotsService } from './view-plots.service';

@Component({
  selector: 'app-view-plots',
  templateUrl: './view-plots.component.html',
  providers: [ViewPlotsService],
  styleUrls: ['./view-plots.component.css']
})
export class ViewPlotsComponent implements OnInit {
  plots: Plot[];
  constructor(private plotsService: ViewPlotsService) { }

  ngOnInit() {
    this.getPlots();
  }

  getPlots(): void {
    this.plotsService.getPlots()
      .subscribe(plots => (this.plots = plots));
  }
}
