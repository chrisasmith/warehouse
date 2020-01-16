import { Component, OnInit, HostListener  } from '@angular/core';

@HostListener('scroll', ['$event'])
@Component({
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['./eula.component.scss']
})

export class EulaComponent implements OnInit {

  constructor() { }

  public eula: string;

  ngOnInit() {
    this.eula = '';
  }


  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max )   {
        console.log('scrolled');
    }
  }

}
