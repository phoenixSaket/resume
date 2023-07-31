import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  public year: number = 0;
  public month: number = 0;
  public day: number = 0;

  ngAfterViewInit(): void {
    const date = this.calculateDate(new Date(2020, 9, 5));

    this.year = Math.floor(date);
    this.month = Math.floor((date - this.year) * 12);

  }

  calculateDate(date: Date) {
    const differenceInYears = Date.now() - date.getTime();
    const dateCheck = differenceInYears / (1000 * 365 * 3600 * 24);
    return dateCheck;
  }

}
