import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() filterable:string = 'no';
  @Input() dateRange:string = 'no';
  @Input() datagrid:string;

  items = ['First', 'Second', 'Third','First', 'Second'];
  
  longText = false;


  constructor() { }

  ngOnInit() {
    console.log(this.filterable);
    console.log(this.dateRange);
    console.log(this.datagrid);
  }


}
