import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  private bodyText: string;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.bodyText = '';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
