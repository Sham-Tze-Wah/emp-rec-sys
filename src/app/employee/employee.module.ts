import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee.route';
import { SubEmployeeListComponent } from './sub-employee-list/sub-employee-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbDatepickerModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    EmployeeListComponent,
    SubEmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class EmployeeModule { }
