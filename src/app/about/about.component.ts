import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public selectedTech: string = "";
  public isInit: boolean = false;
  isMobile: boolean = false;

  public icons = [
    "Angular",
    "NodeJS",
    "Ionic",
    "Capacitor",
    "Dynatrace",
    "SQLite",
    "Photoshop",
    "Adboe XD",
    "Figma"
  ];

  constructor() {
    this.isMobile = screen.width <= 500;
  }

  setSelectedTech(tech: string) {
    this.selectedTech = tech;
  }

  resetTech() {
    this.selectedTech = "";
    this.isInit = false;
  }

  initTech() {
    this.isInit = true;
  }

}
