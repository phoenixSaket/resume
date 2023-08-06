import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public selectedCompany: string = '';
  public cursorInit: boolean = false;

  public experience = [
    {
      "company": "CitiusTech",
      "role": "Software Enginner",
      "period": {
        "start": {
          "month": 10,
          "year": 2020
        },
        "end": {
          "month": 0,
          "year": 0
        }
      },
      description: "CitiusTech is a healthcare IT company providing specialized healthcare technology & business services, consulting, and medical IT solutions.",
      link: "www.citiustech.com"
    },
    {
      "company": "ScrollRight",
      "role": "Software Enginner",
      "period": {
        "start": {
          "month": 7,
          "year": 2020
        },
        "end": {
          "month": 9,
          "year": 2020
        }
      },
      description: "ScrollRight is a online freelance service provider and product building company where you can ask to create your own app, website, software. Think Big. Think Innovative. Think ScrollRight!",
      link: "www.scrollright.com",
    },
    {
      "company": "PlexusMD",
      "role": "Intern Software Enginner",
      "period": {
        "start": {
          "month": 1,
          "year": 2020
        },
        "end": {
          "month": 6,
          "year": 2020
        }
      },
      description: "PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.",
      link: "www.plexusmd.com"
    }
  ];

  public selectCompany(company: string): void {
    this.selectedCompany = company;
  }

  public initCursor() {
    this.cursorInit = true;
  }

  public resetCursor() {
    this.cursorInit = false;
    this.selectCompany('');
  }

  public getMonth(month: number): string {
    let monthName: string = '';

    switch (month) {
      case 1:
        monthName = 'Jan';
        break;
      case 2:
        monthName = 'Feb';
        break;
      case 3:
        monthName = 'Mar';
        break;
      case 4:
        monthName = 'Apr';
        break;
      case 5:
        monthName = 'May';
        break;
      case 6:
        monthName = 'Jun';
        break;
      case 7:
        monthName = 'Jul';
        break;
      case 8:
        monthName = 'Aug';
        break;
      case 9:
        monthName = 'Sep';
        break;
      case 10:
        monthName = 'Oct';
        break;
      case 11:
        monthName = 'Nov';
        break;
      case 12:
        monthName = 'Dec';
        break;
      default:
        break;
    }
    return monthName;
  }
}
