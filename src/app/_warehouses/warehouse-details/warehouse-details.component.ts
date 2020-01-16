import {Component, OnInit, ViewChild} from '@angular/core';
import {DrawerComponent} from '../../_components/drawer/drawer.component';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.scss']
})
export class WarehouseDetailsComponent implements OnInit {
  @ViewChild('whDrawer') whDrawer: DrawerComponent;
  constructor() { }

  ngOnInit() {
  }

}
