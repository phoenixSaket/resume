import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public shouldShow: boolean = true;
  public isEnabled: boolean = false;
  public isMobile: boolean = false;
  onChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isMobile = window.innerWidth < 768;

    document.addEventListener('scroll', (_event: Event) => {
      this.isEnabled = this.isMobile || window.scrollY < 100;
      this.onChange.next(this.isEnabled);
    });

    this.isEnabled = this.isMobile:

  }

  ngOnInit() {
    this.onChange.subscribe((isEnabled: boolean) => {
      if (!isEnabled) {
        this.links.map(link => link.isSelected = false);
      } else {
        this.links.map(link => { if (link.icon === 'home') link.isSelected = true });
      }
    });
  }

  public links = [
    { icon: 'home', text: 'Home', path: '#', isSelected: false },
    { icon: 'person', text: 'About', path: '#about', isSelected: false },
    { icon: 'business_center', text: 'Work', path: '#work', isSelected: false },
    { icon: 'laptop_mac', text: 'Experience', path: '#experience', isSelected: false },
    { icon: 'school', text: 'Education', path: '#education', isSelected: false },
    { icon: 'email', text: 'Contact', path: '#contact', isSelected: false }
  ];


  selectedLink(link: any) {
    this.links.forEach(element => {
      element.isSelected = false;
    });
    link.isSelected = true;
  };
}
