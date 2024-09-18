import { Component, inject, OnInit } from '@angular/core';
import { SpecialTaskService } from '../services/special-task.service';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit {

  specialTaskService: SpecialTaskService = inject(SpecialTaskService);

  specialTasks: any;

  ngOnInit(): void {
    this.getTasks();
  }



  deleteSpecialTask(index){
    this.specialTaskService.deleteTask(index);
    this.getTasks()
  }
  deleteSpecialInnerTask(outer,inner){
    this.specialTaskService.deleteInnerTask(outer,inner);
    this.getTasks()
  }
  
  getTasks(){
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    let arr = [];
    const dateA = new Date(formattedDate);

    this.specialTaskService.getTasks().forEach(ele => {
      let dateB = new Date(ele.date);
      if(dateA.getTime() < dateB.getTime()){
        arr.push(ele)      
      }
    });
    this.specialTasks = arr;
    
  }
}
