import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { BarsAnimationComponent } from '../bars-animation/bars-animation.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private notifyMessage: string;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifySideBar: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('barsAnimation')
  private barsAnimation:BarsAnimationComponent;

  @Input() menuNames: Array<string>;

  constructor() { }

  ngOnInit() {
    console.log(this.menuNames);
  }

  onNotify(message: string): void {
    this.notifyMessage = message;
    this.notifyParent.emit(this.notifyMessage);
  }

  open_side_menu(name) {
    this.notifySideBar.emit(name);
    this.barsAnimation.toggleAnimationNavBar();
  }
}
