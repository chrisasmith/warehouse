import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-custom-config-modal',
  templateUrl: './custom-config-modal.component.html',
  styleUrls: ['./custom-config-modal.component.scss']
})
export class CustomConfigModalComponent implements OnInit {
  @Input() modal: string;
  @Output() close: EventEmitter<string>;

  groups = [
    {
      "name": "",
      "value": ""
    }
  ]
  constructor(public router: Router) {
    this.close = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  closeModal(modal: string) {
    this.close.emit(modal);
  }

  addItem(index) {
    // var currentElement = this.groups[index];
    // this.groups.splice(index, 0, currentElement);
  }
  createNewConfig() {
    // Execute create api using template value
    // Redirect to configuration list
    this.router.navigate(['dashboards/clusters/create-new-summary']);
  }
}
