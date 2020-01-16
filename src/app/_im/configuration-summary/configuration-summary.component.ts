import { Component, OnInit , Input} from '@angular/core';
import {NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-configuration-summary',
  templateUrl: './configuration-summary.component.html',
  styleUrls: ['./configuration-summary.component.scss']
})
export class ConfigurationSummaryComponent implements OnInit {

  tab = 'details';
  content = '';
  modal = '';
  heading = 'Configuration Details';
  subheading = 'Configurations > Jobs';
  jobtime = false;

  constructor( private modalService: NgbModal) { }

  ngOnInit() {
  }

  selectTab(tab: string) {
    console.log('Selected tab: ' + tab);
    this.tab = tab;
  }

  openModal(modal: string) {
    console.log('Selected modal: ' + modal);
    this.modal = modal;
  }

  toggleJobFields() {
    if (this.jobtime === false) {
      this.jobtime = true;
    } else {
      this.jobtime = false;
    }
  }


}
