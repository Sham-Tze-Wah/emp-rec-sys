import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  {path: 'emp-list', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path: '', redirectTo: 'emp-list', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
