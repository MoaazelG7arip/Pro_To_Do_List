import { Component, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SpecialTaskService } from '../services/special-task.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  specialTaskService: SpecialTaskService = inject(SpecialTaskService);
  specialTasks;
  event:EventInput[];
  ngOnInit(): void {
    this.specialTasks = this.specialTaskService.getTasks();
    this.getTasks();
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    // events: ()=>{ 
    //   console.log(this.specialTasks)
    //   return this.specialTasks
    // }
  }

  getTasks(){
    let instaceData = [];
    console.log(new Date())
    this.specialTasks.forEach(ele => {
      ele.task.forEach((e)=>{
        instaceData.push(
        { title: e.task, start: ele.date}
      )

      })
    });
    this.event = instaceData;
  }
};
  

// events: [
//   { title: 'Meeting', start: new Date() }
// ]