import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor() {  }
  
  // Menúes
  @ViewChild('menu', { static: false }) menu: MatSidenav;
  @ViewChild('extra', { static: false }) extra: MatSidenav;

  menuIsOpen: boolean;
  extraIsOpen: boolean;

  menuItems: MenuItems[];

  ngAfterViewInit() {
    this.prepareMenu();

    this.menu.open();
  }

  async toggleMenu() {
    this.menuIsOpen = await this.menu.toggle() === 'open' ? true : false;
  }
  
  async toggleExtraMenu() {
    this.extraIsOpen = await this.extra.toggle() == 'open' ? true : false;
  }

  prepareMenu() {
    this.menuItems = [
      { name: 'Inicio', icon: 'home', link: 'test' },
      { name: 'Tareas', icon: 'view_list', link: 'test' },
      { name: 'Proyectos', icon: 'assignment', link: 'test' },
    ]
  }
}

interface MenuItems {
  name: string;
  icon?: string;
  link?: string;
}
