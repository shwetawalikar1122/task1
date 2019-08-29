import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule } from '@angular/material';
import { AppointmentsdashboardComponent } from './appointmentsdashboard/appointmentsdashboard.component';
import { AppointmentschedulerComponent } from './appointmentscheduler/appointmentscheduler.component';
import { MycasesComponent } from './mycases/mycases.component';
import { routing } from './app.routing';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MenuNavComponent } from './menu-nav/menu-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    AppointmentsdashboardComponent,
    AppointmentschedulerComponent,
    MycasesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, routing,
    MatTabsModule, MatMenuModule,MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
