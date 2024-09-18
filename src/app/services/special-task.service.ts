import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialTaskService {

  private specialTasks: any;

  constructor() {
    if(localStorage.getItem('specialtasks')){
      this.specialTasks = JSON.parse(localStorage.getItem('specialtasks'));
    } else {
      this.specialTasks = [];
    }
    this.removeBreviousTasks()
  }
  
  addTask(task:string,date) {
    let element;
    this.specialTasks.forEach(ele => {
      if(ele.date == date){
        element = ele
      }
    });
    if(element){
      element.task.push({task:task,check:false});
    }else{
      this.specialTasks.push({
        task:[{
          task:task,
          check: false
        }],
        date:date,
        check:false
      });
    }
    this.saveTasks();
  }
  getTasks(){
    this.sortTasks()
    return this.specialTasks;
  }
  deleteTask(index:number){
    this.sortTasks();
    if(this.checkTodayTask()){
      this.specialTasks.splice((index+1), 1);
    } else {
      this.specialTasks.splice(index, 1);
    }
    this.saveTasks();
  }
  deleteInnerTask(outer:number, inner:number){
    this.sortTasks();
    if(this.checkTodayTask()){
      this.specialTasks[(outer+1)].task.forEach((task)=>{
        if(task == this.specialTasks[(outer+1)].task[inner]){
          this.specialTasks[(outer+1)].task.splice(inner, 1);
        }
      })
    }else{      
      this.specialTasks[outer].task.forEach((task)=>{
        if(task == this.specialTasks[outer].task[inner]){
          this.specialTasks[outer].task.splice(inner, 1);
        }
      })
    }
    this.saveTasks()
  }
  toggleInnerCheck(outer,inner){
    this.specialTasks[outer].task.forEach((task)=>{
      if(task == this.specialTasks[outer].task[inner]){
        this.specialTasks[outer].task[inner].check = !this.specialTasks[outer].task[inner].check
      }
    })
    this.saveTasks();
  }

  
  saveTasks(){
    this.sortTasks()
    localStorage.setItem('specialtasks', JSON.stringify(this.specialTasks));
  }

  sortTasks() {
    this.specialTasks.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  checkTodayTask(){
    let dateA = new Date(this.specialTasks[0].date);

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    const dateB = new Date(formattedDate);
    if( dateA.getTime() == dateB.getTime()){
      return true;
    }else{
      return false;
    }
  }
  removeBreviousTasks(){
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    const dateB = new Date(formattedDate);

    this.specialTasks.forEach((ele)=>{
      let dateA = new Date(ele.date);
      if(dateA.getTime() < dateB.getTime()){
        this.specialTasks.splice(this.specialTasks.indexOf(ele), 1);
      }
    })
    this.saveTasks();

  }
}
