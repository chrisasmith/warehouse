import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headingtitlenav',
  templateUrl: './headingtitlenav.component.html',
  styleUrls: ['./headingtitlenav.component.scss']
})
export class HeadingtitlenavComponent implements OnInit {

  public FileMgrButtonShow: boolean = false;
  public CreateCfgButtonShow: boolean = false;

  @Input() heading: string;
  @Input() subheading: string;
  @Input() page: string;
  @Input() modal: string;
  @Output() open: EventEmitter<string>;

  constructor(private modalService: NgbModal) {
    this.open = new EventEmitter<string>();
  }

  ngOnInit() {
    if (this.page === 'FileManager') {
      this.FileMgrButtonShow = true;
      this.CreateCfgButtonShow = false;
    } else if (this.page === 'Configurations') {
      this.FileMgrButtonShow = false;
      this.CreateCfgButtonShow = true;
    }
  }

  openModal(modal: string) {
    this.open.emit(modal);
  }
}
