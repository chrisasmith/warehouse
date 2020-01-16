import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headingtitlenav-template',
  templateUrl: './headingtitlenav-template.component.html',
  styleUrls: ['./headingtitlenav-template.component.scss']
})
export class HeadingtitlenavTemplateComponent {
  @Input() heading;
  @Input() subheading;
  @Input() page;
  

}
