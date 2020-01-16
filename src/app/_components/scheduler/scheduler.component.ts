import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  @Input() schedule: any = {};
  @Output() updated: EventEmitter<any> = new EventEmitter<any>();

  public toTimeId = '0';
  public fromTimeId = '0';

  constructor() { }

  ngOnInit() {
  }

  public setSchedule(): void {
    console.log('Setting Schedule');
    this.updated.emit({});
  }

}
