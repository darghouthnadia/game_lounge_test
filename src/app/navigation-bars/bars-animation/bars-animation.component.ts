import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bars-animation',
  templateUrl: './bars-animation.component.html',
  styleUrls: ['./bars-animation.component.css']
})
export class BarsAnimationComponent implements OnInit {
  private iconStatus: string = 'bars';
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const barsMenu = document.querySelector('.bars-menu');

    barsMenu.addEventListener('click', function () {
      barsMenu.classList.toggle('open');
    });
  }

  public toggleAnimationNavBar() {
    const barsMenu = document.querySelector('.bars-menu');
    if (!barsMenu.getAttribute('class').includes('open')) {
      barsMenu.className += ' open';
    }

  }

  change_icon_status() {
    if (this.iconStatus === 'bars') {
      this.iconStatus = 'close';
    }
    this.notify.emit(this.iconStatus);
  }

}
