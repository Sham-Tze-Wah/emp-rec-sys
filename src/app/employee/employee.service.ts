import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  showEmpLogs(msg: string) {
    console.log("Employee Service: " + msg);  
  }
}
