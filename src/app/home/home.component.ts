import { AfterViewInit, Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  public year: number = 0;
  public month: number = 0;
  public days: number = 0;
  public name: string = 'SAKET VERMA';

  ngAfterViewInit(): void {
    const date = this.calculateDate(new Date(2020, 9, 5));

    this.year = Math.floor(date);
    this.month = Math.floor((date - this.year) * 12);
    this.days = Math.floor((((date - this.year) * 12) - this.month) * 24);  
    
    this.namingFunction();
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
