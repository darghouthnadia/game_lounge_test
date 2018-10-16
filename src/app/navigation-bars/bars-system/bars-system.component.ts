import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { GetMenuJsonService } from 'src/app/get-menu-json.service';
import { Menu } from 'src/app/modele/MenuNav';

@Component({
  selector: 'app-bars-system',
  templateUrl: './bars-system.component.html',
  styleUrls: ['./bars-system.component.css']
})
export class BarsSystemComponent implements OnInit {
  public shouldShowSidebar: string;
  @ViewChild('sideBar')
  private sideBar: SideBarComponent;
  public menu: any;
  menuItem: Menu;
  public organizedMenu: Array<Menu>;
  public nav_name_list = [];


  constructor(private getMenuJson: GetMenuJsonService) {

  }

  ngOnInit() {
    this.getMenuJson.getMenu().then(data => {
      this.menu = data;
      this.organizedMenu = [];
      for (const menu_id of this.menu['main']) {
        this.menuItem = this.menu['menu'].filter(function (item) {
          return item.id === menu_id;
        })[0];
        this.organizedMenu.push(this.menuItem);
      }
      this.nav_name_list = this.organizedMenu.map(a => a.name);
    });
  }

  onNotify(message: string): void {
    this.sideBar.toggleSideBar();
    this.sideBar.prepareEventListner();
  }

  onNotifySidebar(name_menu: string) {
    this.sideBar.openSpecificMenu(name_menu);
  }

}
