import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SubEmployeeListComponent } from './sub-employee-list/sub-employee-list.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path:'sub', component: SubEmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
