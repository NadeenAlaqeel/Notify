import { Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { EventsComponent } from './View/events/events.component';
import { CalenderComponent } from './View/calender/calender.component';
import { LoginComponent } from './View/login/login.component';
import { ADDEDITComponent } from './View/addedit/addedit.component';
import { AnnouncementComponent } from './View/dashboard/announcement/announcement.component';
import { AuthGuard } from './Authentication/auth.guard';

export const routes: Routes = [

    { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Default route redirects to home

    { path: 'Home', component: HomeComponent },
    { path: 'Dashboard', component: DashboardComponent ,canActivate: [AuthGuard] }, 
    { path: 'Events', component: EventsComponent ,canActivate: [AuthGuard]}, 
    { path: 'Calender', component: CalenderComponent,canActivate: [AuthGuard] },
    { path: 'Login', component: LoginComponent, },
    { path: 'AddEdit', component: ADDEDITComponent ,canActivate: [AuthGuard]},
    { path: 'AddAnnouncements', component: AnnouncementComponent,canActivate: [AuthGuard] },
    { path: 'AddEdit/:id', component: ADDEDITComponent,canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent },





];
