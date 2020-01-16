import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.scss']
})
export class ClustersComponent implements OnInit {

  // Visuals
  heading = 'Clusters';
  subheading = 'Cluster Overview';

  // Page States
  addClusters = true;
  showClusters = false;
  step = 0;

  // Data
  clusterData: any[];

  constructor() { }

  ngOnInit() {
  }

  loadStep(step: number) {
    this.step = step;
    switch (this.step) {
        case 1:
          this.addClusters = true;
          this.showClusters = false;
          break;
        case 2:
          this.addClusters = false;
          this.showClusters = true;
          break;
      default:
        break;
    }
    console.log(this.step);
  }

}
