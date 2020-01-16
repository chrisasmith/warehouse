import {Component, Input, OnInit} from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-drawer',
  styleUrls: ['./drawer.component.scss'],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent implements OnInit {
  @Input() title = 'Draw Window';

  constructor(public globals: ThemeOptions) {}

  ngOnInit() {
  }

  public toggleDrawer(): void {
    setTimeout(() => {
      this.globals.toggleDrawer = !this.globals.toggleDrawer;
    }, 200);
  }

  public clickOutsideDrawer(): void {
    if (this.globals.toggleDrawer) {
      this.toggleDrawer();
    }
  }

}
