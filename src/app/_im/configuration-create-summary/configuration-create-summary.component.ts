import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-configuration-create-summary',
  templateUrl: './configuration-create-summary.component.html',
  styleUrls: ['./configuration-create-summary.component.scss']
})
export class ConfigurationCreateSummaryComponent implements OnInit {

  tab = 'details';
  content = '';
  modal = '';
  constructor(public router: Router, private modalService: NgbModal) { }

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

  createNewConfiguration() {
    this.router.navigate(['/dashboards/configurations']);
  }

}
