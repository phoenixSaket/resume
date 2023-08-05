import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public links = [
    { icon: 'home', text: 'Home', path: '#', isSelected: true },
    { icon: 'person', text: 'About', path: '#about', isSelected: false },
    { icon: 'business_center', text: 'Work', path: '#work', isSelected: false },
    { icon: 'laptop_mac', text: 'Experience', path: '#experience', isSelected: false },
    { icon: 'school', text: 'Education', path: '#education', isSelected: false },
    { icon: 'email', text: 'Contact', path: '#contact', isSelected: false }
  ];

  public shouldShow: boolean = false;

  selectedLink(link: any) {
    this.links.forEach(element => {
      element.isSelected = false;
    });
    link.isSelected = true;
  };
}
