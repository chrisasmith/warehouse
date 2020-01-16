import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-salesforce-modal',
  templateUrl: './salesforce-modal.component.html',
  styleUrls: ['./salesforce-modal.component.scss']
})
export class SalesforceModalComponent implements OnInit {
  @Input() modal: string; 
  @Output() close: EventEmitter<string>;

  constructor() { 
    this.close = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  closeModal(){
    this.close.emit("");
  }
  

}
