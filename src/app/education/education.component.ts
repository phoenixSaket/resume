import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  public selectedEducation: string = "";
  public cursorInit: boolean = false;

  public education = [
    {
      "course": "MCA",
      "courseFull": "Masters of Computer Applications",
      "period": {
        "start": 2017,
        "end": 2020
      },
      "college": "Veermata Jijabai Technological Institute (VJTI)",
      "city": "Mumbai"
    },
    {
      "course": "BCA",
      "courseFull": "Bachelors of Computers Applications",
      "period": {
        "start": 2014,
        "end": 2017
      },
      "college": "G. H. Raisoni Institute for Information Technology",
      "city": "Nagpur"
    },
    {
      "course": "HSC",
      "courseFull": "Higher School Certificate",
      "period": {
        "start": null,
        "end": 2014
      },
      "college": "Ushabai Deshmukh Jr. College",
      "city": "Achalpur"
    },
    {
      "course": "SSC",
      "courseFull": "Secondory School Certificate",
      "period": {
        "start": null,
        "end": 2012
      },
      "college": "Fatima Convent High School",
      "city": "Achalpur"
    }
  ];

  public selectEducation(education: string): void {
    this.selectedEducation = education;
  }

  public initCursor() {
    this.cursorInit = true;
  }

  public resetCursor() {
    this.cursorInit = false;
    this.selectEducation('');
  }

}
