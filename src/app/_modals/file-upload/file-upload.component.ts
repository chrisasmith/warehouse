
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
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
