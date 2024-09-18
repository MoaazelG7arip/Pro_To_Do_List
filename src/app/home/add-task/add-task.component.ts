import { EventEmitter, inject, Output } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  taskService:TaskService = inject(TaskService)

  @ViewChild('task') task: ElementRef;
  
  @Output() cancelAddTask: EventEmitter<string> = new EventEmitter();
  addTask(){
    if(this.task.nativeElement.value){
      this.taskService.addTask(this.task.nativeElement.value);
      this.cancelAddTask.emit('');
    }else {
      alert('There is no task to add');
    }
  }
  closeTask(){
    this.cancelAddTask.emit('');
  }

}
