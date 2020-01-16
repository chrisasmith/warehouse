import { Component, OnInit, Input, NgModule, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { Router, CanActivate } from '@angular/router';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configuration-create',
  templateUrl: './configuration-create.component.html',
  styleUrls: ['./configuration-create.component.scss']
})
export class ConfigurationCreateComponent implements OnInit {

  constructor(public router: Router, private modalService: NgbModal) { }
  private form: any = {};
  errorMessage = '';

  // Visuals
  heading = 'Create Configuration';
  subheading = '';
  page = 'CreateConfiguration';
  templt = 'new';
  buttonCfg = 'defaultConfig';
  content = '';
  modal = '';


  step = 0;
  isChecked = false;
  createConfiguration = true;
  addFiles = false;
  addMacros = false;
  confirmSummary = false;

  templates = [
    { id: 1, name: 'Acme' },
    { id: 2, name: 'SalesForce to Avalanche' }
  ];

  selectedTemplate: any;

  ngOnInit() {
  }

  onSelectTemplate(item: any) {
    console.log('onSelectTemplate', item);
    this.selectTempOption('custom');

  }

  selectTempOption(templt: string) {
    console.log('Selected view: ' + templt);
    this.templt = templt;
  }

  changeBtn(buttonCfg: string) {
    console.log('Selected button: ' + buttonCfg);
    this.buttonCfg = buttonCfg;
  }

  // loadStep(step: number) {
  //   this.step = step;
  //   switch (this.step) {
  //     case 1:
  //       this.createConfiguration = true;
  //       this.addFiles = false;
  //       this.addMacros = false;
  //       this.confirmSummary = false;
  //       break;
  //     case 2:
  //       this.createConfiguration = false;
  //       this.addFiles = true;
  //       this.addMacros = false;
  //       this.confirmSummary = false;
  //       break;
  //     case 3:
  //       this.createConfiguration = false;
  //       this.addFiles = false;
  //       this.addMacros = true;
  //       this.confirmSummary = false;
  //       break;
  //     case 4:
  //       this.createConfiguration = false;
  //       this.addFiles = false;
  //       this.addMacros = false;
  //       this.confirmSummary = true;
  //       this.onSubmit();
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log(this.step);
  // }

  // onSubmit() {
  //   this.router.navigate(['dashboards/integrations']);
  // }


  openModal(modal: string) {
    this.modal = modal;
  }

  createConfig() {
    // Execute create api using template value
    // Redirect to configuration list
    this.router.navigate(['im/configurations/summary/']);
  }

}
