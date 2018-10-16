import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/modele/MenuNav';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() menuList: Array<Menu>;

  public closeAllSubMenu(){
    const dropdown_container = document.getElementsByClassName('dropdown-container');
    for (let i = 0; i < dropdown_container.length; i++) {
      dropdown_container[i].setAttribute('style', 'display:none');
    }
  }

  public toggleSideBar() {
    const wrapperMenu = document.querySelector('#wrapper');
    wrapperMenu.classList.toggle('toggled');
    this.closeAllSubMenu();
  }

  prepareEventListner() {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  public openSpecificMenu(menu_name) {
    const wrapperMenu = document.querySelector('#wrapper');
    if (wrapperMenu.getAttribute('class') === 'toggled') {
      this.toggleSideBar();
      this.prepareEventListner();
    }
    this.closeAllSubMenu();
    const dropdownName = document.getElementsByName(menu_name);
    dropdownName[0].click();
  }

}
