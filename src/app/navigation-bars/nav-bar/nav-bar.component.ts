import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { BarsAnimationComponent } from '../bars-animation/bars-animation.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  private notifyMessage: string;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifySideBar: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('barsAnimation')
  private barsAnimation:BarsAnimationComponent;

  @Input() menuNames: Array<string>;

  constructor() { }

  onNotify(message: string): void {
    this.notifyMessage = message;
    this.notifyParent.emit(this.notifyMessage);
  }

  open_side_menu(name) {
    // Notify bar system that user clicked on navbar menu and toggle the hamburger animation
    this.notifySideBar.emit(name);
    this.barsAnimation.toggleAnimationNavBar();
  }
}
