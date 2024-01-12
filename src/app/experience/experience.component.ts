import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public selectedCompany: string = '';
  public cursorInit: boolean = false;

  public experience = [
    {
      "company": "CitiusTech",
      "role": "Senior Software Enginner",
      "period": {
        "start": {
          "day": 5,
          "month": 10,
          "year": 2020
        },
        "end": {
          "month": 0,
          "year": 0,
          "day": 0
        }
      },
      "timePeriod": {
        day: 0, month: 0, year: 0
      },
      description: "CitiusTech is a healthcare IT company providing specialized healthcare technology & business services, consulting, and medical IT solutions.",
      link: "www.citiustech.com"
    },
    {
      "company": "ScrollRight",
      "role": "Software Enginner",
      "period": {
        "start": {
          "day": 1,
          "month": 7,
          "year": 2020
        },
        "end": {
          "day": 30,
          "month": 9,
          "year": 2020
        }
      },
      "timePeriod": {
        day: 0, month: 0, year: 0
      },
      description: "ScrollRight is a online freelance service provider and product building company where you can ask to create your own app, website, software. Think Big. Think Innovative. Think ScrollRight!",
      link: "www.scrollright.com",
    },
    {
      "company": "PlexusMD",
      "role": "Intern Software Enginner",
      "period": {
        "start": {
          "day": 1,
          "month": 1,
          "year": 2020
        },
        "end": {
          "day": 30,
          "month": 6,
          "year": 2020
        }
      },
      "timePeriod": {
        day: 0, month: 0, year: 0
      },
      description: "PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.",
      link: "www.plexusmd.com"
    }
  ];

  ngOnInit(): void {
    this.experience.forEach((exp: any) => {
      exp.timePeriod = this.getTimePeriod(exp.period.start.day, exp.period.start.month, exp.period.start.year,
        exp.period.end.day, exp.period.end.month, exp.period.end.year);
    });
  }
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

  getTimePeriod(day: number, month: number, year: number, day1: number, month1: number, year1: number) {
    month = year1 == 0 ? month - 1 : month;
    const date2: Date = year1 != 0 ? new Date(year1, month1, day1) : new Date();
    const date = this.calculateDate(new Date(year, month, day), date2);
    let ryear = Math.floor(date);
    let rmonth = Math.floor((date - ryear) * 12);
    let rdays = Math.ceil((((date - ryear) * 12) - rmonth) * this.getDaysInMonth())
    if (rdays > 28 && year1 != 0) {
      rdays = 0;
      rmonth += 1;
    }
    return { day: rdays, month: rmonth, year: ryear };
  }

  getDaysInMonth(): number {
    let days: number = 30;

    const month: number = new Date().getMonth() + 1;
    const year: number = new Date().getFullYear();
    const isLeapYear: boolean = year % 4 == 0;

    switch (month) {
      case 1 || 3 || 5 || 7 || 8 || 10 || 12:
        days = 31;
        break;
      case 2:
        days = isLeapYear ? 29 : 28;
        break;
      case 4 || 6 || 9 || 11:
        days = 30;
        break;
      default:
        days = 30;
        break;
    }

    return days
  }

  calculateDate(date: Date, date2: Date) {
    const differenceInYears = date2.getTime() - date.getTime();
    const dateCheck = differenceInYears / (1000 * 365 * 3600 * 24);
    return dateCheck;
  }
}
