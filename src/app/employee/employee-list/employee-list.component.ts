import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee-list/employee-list.model';
import {EMPLOYEES} from '../mock/mock-employee-list';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: EmployeeModel[] = EMPLOYEES;
  employee: EmployeeModel = {};

  ngOnInit(): void {
    
  }
}
