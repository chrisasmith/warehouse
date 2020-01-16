
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-summary',
  templateUrl: './template-summary.component.html',
  styleUrls: ['./template-summary.component.scss']
})
export class TemplateSummaryComponent implements OnInit {

  modal = '';
  tab = 'details';
  constructor() { }

  ngOnInit() {
  }

  openModal(modal: string) {
    console.log('Selected modal: ' + modal);
    this.modal = modal;
  }

  selectTab(tab: string) {
    console.log('Selected tab: ' + tab);
    this.tab = tab;
  }
}
