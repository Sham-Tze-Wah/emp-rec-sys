import { Component, OnInit, Input, TemplateRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { EmployeeModel } from '../employee-list/employee-list.model';
import {EMPLOYEES} from '../mock/mock-employee-list';
import { MasterDataModel } from 'src/app/master-data/master-data.model';
import { POSITIONS, HOBBIES, GENDERS } from '../mock/mock-master-data';
import { default as swal } from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePipe } from 'src/app/shared/custom-date.pipe';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit{

  @Input() hobbyChkboxDirtyTouched : boolean = false;
  @Input() genderRadioDirtyTouched: boolean = false;
  @ViewChild("positionRef") positionRef?: NgModel;
  @ViewChild('genderRadio') genderRadio?: NgModel;

  employees: EmployeeModel[] = EMPLOYEES;
  employee: EmployeeModel = {};

  positions: MasterDataModel[] = POSITIONS;
  hobbies: MasterDataModel[] = HOBBIES;
  genders: MasterDataModel[] = GENDERS;

  selectedColorTheme: number = 0;
  title = '';
  colorTheme = [
    {
      theme: 'bg-success',
      btnTheme: 'btn-success',
      text: 'text-white'
    },
    {
      theme: 'bg-primary',
      btnTheme: 'btn-primary',
      text: 'text-white'
    }
  ]
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    ) {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
  }

  onlyNumber(event: any){
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    } else {
      // If the number field already has . then don't allow to enter . again.
      if (event.target.value.search(/\./) > -1 && charCode == 46) {
        return false;
      }
      if (event.target.value.search(/\./) > -1 && (event.target.value + '').split('.')[1].length > 1) {
        return false;
      }
      return true;
    }
  }

  onPastenumeric(event: ClipboardEvent){
    let clipboardData = event.clipboardData;

    let pastedText = clipboardData!!.getData('text');
    let trimmedText = /^[0-9]*$/;

    if (trimmedText.test(pastedText)) {
    } else {
      // this.toastrService.error('Numeric value allowed', 'Error');
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onChangePositions(event: any){
    
  }

  onChangeHobbies(event: any){
    this.hobbyChkboxDirtyTouched = true;
    if(event.target.checked){
      if(this.employee.hobbies === undefined){
        this.employee.hobbies = [];
      }
      this.employee.hobbies!!.push(event.target.value);
    }
    else if(this.hobbies.length > 0){
      for(let index = 0; index < this.employee.hobbies!!.length; index++ ){
        if(this.employee.hobbies!![index] === event.target.value){
          this.employee.hobbies!!.splice(index, 1);
        }
      }
    }
    else{
      this.toastrService.error('Something went wrong in checkbox.', 'error');
    } 
  }

  globalAtLeastOneChecked(){
    if(this.employee.hobbies === undefined)
      return false;
    else
      return this.employee.hobbies.length > 0 ? true : false;
  }

  openModalCenter(modalCenter: TemplateRef<any>, title : string, selectedColorTheme: number, employee?: EmployeeModel) {
    this.employee = {};
    this.title = title;
    this.selectedColorTheme = selectedColorTheme;
    if(employee !== undefined)
      this.setEmployee(employee!!);
    this.modalService.open(modalCenter, {centered: true, ariaLabelledBy: title, size: 'lg'});
  }

  setEmployee(employee: EmployeeModel){
    this.employee = employee;
  }

  saveEmployee(modal: TemplateRef<any>, saveOrUpdate : number, form: NgForm){
    if(form.invalid){
      console.log(this.genderRadio);
      Object.values(form.controls).forEach(control => {
        if(control.value===null || control.value === undefined){
          control.markAsDirty();
          control.markAsTouched();
        }
      })
      this.genderRadioDirtyTouched = true;
      this.hobbyChkboxDirtyTouched = true;
      return; 
    }

    console.log(this.employee);

    this.genderRadioDirtyTouched = true;
    this.hobbyChkboxDirtyTouched = true;
    if(saveOrUpdate === 0){
      this.employees.push(this.employee);
    }
    else{
      const employeeFound = this.employees.map(emp => {
        if(emp.empid === this.employee.empid){
          return this.employee;
        }
        return emp;
      })
    }

    this.closeModal(modal);
    this.toastrService.success('Successful!', 'success');
  }

  closeModal(modal: TemplateRef<any>){
    this.modalService.dismissAll();
  }

  setPosition(position: string){
    this.employee.position = position;
  }

  deleteEmployee(employee: EmployeeModel){
    swal.fire({
      // title: 'Are you sure?',
      title: `Do you want to delete information of ${employee.username}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(item => item !== employee);
        this.toastrService.success('Successful!', 'success');
      }
    })
  }

  formatDate(event:any){
    console.log(event);
    CustomDatePipe.transform(event);
  }

  checkDirtyTouchedAndValidity(ngModelRef: NgModel){
    return (ngModelRef!!.dirty || ngModelRef!!.touched);
  }  

  checkEmptyValue(ngModelRef?: NgModel){
    return ngModelRef!!.invalid;
    // return ngModelRef?.value === null || ngModelRef?.value === undefined || ngModelRef?.value === '';
  }
}
