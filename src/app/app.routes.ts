import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},

];
