import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss']
})
export class PermissionsModalComponent implements OnInit {

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


