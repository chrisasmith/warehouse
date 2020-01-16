import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FilemgrComponent } from '../../_modals/filemgr/filemgr.component';
@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {

  // Visuals
  heading = 'File Manager';
  subheading = 'Team & Users';
  page = 'FileManager';

  view = 'filelist';
  content = '';
  modal = '';


  modalReference: NgbModalRef;
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() { }

  selectView(view: string) {
    console.log('Selected view: ' + view);
    this.view = view;
  }

  openModal(modal: string) {
    this.modal = modal;
  }
}
