import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  @Input() project: any = null;
  @Output() closeProject: EventEmitter<any> = new EventEmitter<any>();

  backClick() {
    this.closeProject.emit(this.project);
  }
}
