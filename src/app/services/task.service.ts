import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: any;

  constructor() {
    if(localStorage.getItem('tasks')){
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
      this.tasks = [];
    }
  }


  addTask(task:string) {
    this.tasks.push({
      task:task,
      check:false
    });
    this.saveTasks();
  }
  getTasks(){
    return this.tasks;
  }
  deleteTask(index:number){
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
  updateTask(task:string, index:number){
    this.tasks[index].task = task;
    this.saveTasks();
  }
  toggleCheck(index:number){
    this.tasks[index].check = !this.tasks[index].check;
    this.saveTasks();
  }


  saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
