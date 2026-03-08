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
    const date = this.calculateDate(new Date(2020, 0, 6));

    this.year = Math.floor(date);
    this.month = Math.floor((date - this.year) * 12);
    this.days = Math.ceil((((date - this.year) * 12) - this.month) * this.getDaysInMonth());

    this.namingFunction();
  }

  getDaysInMonth(): number {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  calculateDate(date: Date) {
    const differenceInYears = Date.now() - date.getTime();
    const dateCheck = differenceInYears / (1000 * 365 * 3600 * 24);
    return dateCheck;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.download = 'Saket_Verma_Resume.pdf';
    link.href = 'https://phoenixsaket.github.io/saket-resume/Saket_Verma.pdf';
    link.click();
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
