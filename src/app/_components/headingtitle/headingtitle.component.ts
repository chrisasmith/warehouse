import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headingtitle',
  templateUrl: './headingtitle.component.html',
  styleUrls: ['./headingtitle.component.scss']
})
export class HeadingtitleComponent {

  @Input() heading: string;
  @Input() subheading: string;

}
