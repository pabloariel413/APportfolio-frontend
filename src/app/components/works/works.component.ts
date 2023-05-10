import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  @Input() workData: any;
  @Output() workRemove: EventEmitter<WorkModel> = new EventEmitter();

  deleteWork(workToDelete: WorkModel){
    console.log("eliminar", workToDelete);
    this.workRemove.emit(workToDelete);
  }

}
