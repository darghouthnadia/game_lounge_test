import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BarsSystemComponent } from './bars-system/bars-system.component';
import { BarsAnimationComponent } from './bars-animation/bars-animation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SideBarComponent, NavBarComponent, BarsSystemComponent, BarsAnimationComponent],
  exports: [BarsSystemComponent]
})
export class NavigationBarsModule { }
