import { EventEmitter, inject, Output } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SpecialTaskService } from '../../services/special-task.service';
@Component({
  selector: 'app-add-special-task',
  standalone: true,
  imports: [],
  templateUrl: './add-special-task.component.html',
  styleUrl: './add-special-task.component.css'
})
export class AddSpecialTaskComponent {

  specialTaskService:SpecialTaskService = inject(SpecialTaskService)

  @ViewChild('task') task: ElementRef;
  @ViewChild('date') date: ElementRef;
  
  @Output() cancelAddTask: EventEmitter<string> = new EventEmitter();
  addTask(){
    if(this.task.nativeElement.value && this.date.nativeElement.value){
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-CA');
      const dateA = new Date(formattedDate);
      const dateB = new Date(this.date.nativeElement.value);
      if(dateA.getTime() > dateB.getTime()){
        alert('Please enter a coming date');
      }else{
        this.specialTaskService.addTask(this.task.nativeElement.value,this.date.nativeElement.value);
        this.cancelAddTask.emit('');
      }
    }else {
      
      alert('The information is not complete to add');
    }
  }
  closeTask(){
    this.cancelAddTask.emit('');
  }
}
