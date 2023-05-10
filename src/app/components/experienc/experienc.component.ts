import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-experienc',
  templateUrl: './experienc.component.html',
  styleUrls: ['./experienc.component.css']
})
export class ExperiencComponent implements OnInit {
 @Input() title:string = ''

 workList:WorkModel[] = []; 

 constructor(private WorksService: WorksService){}

 ngOnInit(): void {
   this.getWorkList();
 }
 getWorkList(): void{
  this.WorksService.getWorks().subscribe(workList => this.workList = workList);
 }
 addWork(): void{
  let newId: number = this.workList.length + 1
  const newWork: WorkModel = {
    id: newId,
    title: `trabajo ${newId}`,
    urlImage: "https://blog.bling.com.br/wp-content/uploads/2017/12/marketplace-reverso-o-que-e.jpg?x51969",
    description: "agregar descripcion",
    periodo: "agregar periodo" 
  }
  this.WorksService.add(newWork as WorkModel)
  .subscribe((work: WorkModel) => {
    this.workList.push(work);
  });
}

removeWorkToList(workToRemove: WorkModel):void{
  this.WorksService.remove(workToRemove.id).subscribe();
  this.getWorkList();
}
}
