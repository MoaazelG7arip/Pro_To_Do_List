import { Component, ElementRef, EventEmitter, inject, Input, input, OnInit, Output, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit{
  

  taskService: TaskService = inject(TaskService)

  @Input() getTaskIndex: number;
  theTask: string;

  @ViewChild('task') task: ElementRef;

  ngOnInit(): void {
    this.theTask = this.taskService.getTasks()[this.getTaskIndex].task
  }
  
  @Output() cancelUpdateTask: EventEmitter<string> = new EventEmitter();
  updateTask(){
    if(this.task.nativeElement.value){
      this.taskService.updateTask(this.task.nativeElement.value,this.getTaskIndex);
      this.cancelUpdateTask.emit('');
    }else {
      alert('there is no task to update');
    }
  }
  closeTask(){
    this.cancelUpdateTask.emit('');
  }
}
