import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scheduling-modal',
  templateUrl: './scheduling-modal.component.html',
  styleUrls: ['./scheduling-modal.component.scss']
})

export class SchedulingModalComponent implements OnInit {
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
