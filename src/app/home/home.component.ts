import { Component, inject, OnInit } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from '../services/task.service';
import { UpdateTaskComponent } from "./update-task/update-task.component";
import { NgClass } from '@angular/common';
import { AddSpecialTaskComponent } from './add-special-task/add-special-task.component';
import { UpdateSpecialTaskComponent } from './update-special-task/update-special-task.component';
import { SpecialTaskService } from '../services/special-task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddTaskComponent, UpdateTaskComponent, NgClass,AddSpecialTaskComponent,UpdateSpecialTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  taskService: TaskService = inject(TaskService);
  specialTaskService: SpecialTaskService = inject(SpecialTaskService);


  tasks: any;
  updatingTaskIndex: number;
  specialTaskIndex: number;
  specialtasks:any;

  ngOnInit(): void {
    this.getTasks()
    this.getSpecialTask()
  }

  valRequired : string = ''
  addTask(){
    this.valRequired = 'addtask';
  }
  deleteTask(index:number){
    this.taskService.deleteTask(index)
  }
  updateTask(index:number){
    this.valRequired = 'updatetask';
    this.updatingTaskIndex = index;
  }



  addSpecialTask(){
    this.valRequired = 'addspecialtask';
  }
  deleteSpecialInnerTask(index:number){
    this.specialTaskService.deleteInnerTask((this.specialTaskIndex -1), index);
  }
  
  cancelAdd(value:string){
    this.valRequired = value;
    this.getTasks();
    this.getSpecialTask();
  }
  
  
  getTasks(){
    this.tasks = this.taskService.getTasks();
  }

  getSpecialTask(){
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    this.specialTaskService.getTasks().forEach((ele,i) => {
      if(ele.date == formattedDate){
        this.specialtasks  = ele.task;
        this.specialTaskIndex = i;
      }
    });
  }
  
  
  checkIt(index:number){
    this.taskService.toggleCheck(index);
  }
  checkInnerIt(index:number){
  this.specialTaskService.toggleInnerCheck(this.specialTaskIndex, index)
  }
}
