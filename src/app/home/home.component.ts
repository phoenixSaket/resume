import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  year: number = 0;
  month: number = 0;
  days: number = 0;
  name: string = 'SAKET VERMA';

  ngOnInit(): void {
    const date = this.calculateDate(new Date(2020, 9, 5));

    this.year = Math.floor(date);
    this.month = Math.floor((date - this.year) * 12);
    this.days = Math.ceil((((date - this.year) * 12) - this.month) * this.getDaysInMonth());  
    
    this.namingFunction();
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

  calculateDate(date: Date) {
    const differenceInYears = Date.now() - date.getTime();
    const dateCheck = differenceInYears / (1000 * 365 * 3600 * 24);
    return dateCheck;
  }

  namingFunction() {
    let interval: any = null;
    let iteration = 0;
    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const nameLetters: string[] = this.name.split("");

    clearInterval(interval);

    interval = setInterval(() => {
      this.name = this.name
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return nameLetters[index];
          }

          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("");

      if (iteration >= this.name.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.namingFunction();
        }, 5000);
      }

      iteration += 1 / 4;
    }, 30);
  }

}
