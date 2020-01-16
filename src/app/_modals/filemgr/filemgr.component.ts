import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filemgr',
  templateUrl: './filemgr.component.html',
  styleUrls: ['./filemgr.component.scss']
})
export class FilemgrComponent implements OnInit {
  @Input() modal: string;
  @Output() close: EventEmitter<string>;

  constructor() {
    this.close = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  closeModal(modal: string) {
    this.close.emit(modal);
  }
}
