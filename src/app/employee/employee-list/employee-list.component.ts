import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { EmployeeModel } from '../employee-list/employee-list.model';
import {EMPLOYEES} from '../mock/mock-employee-list';
import { MasterDataModel } from 'src/app/master-data/master-data.model';
import { POSITIONS, HOBBIES, GENDERS } from '../mock/mock-master-data';
import { default as swal } from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  @Input() ntnChkboxErrorMsg : boolean = false;

  employees: EmployeeModel[] = EMPLOYEES;
  employee: EmployeeModel = {};

  positions: MasterDataModel[] = POSITIONS;
  hobbies: MasterDataModel[] = HOBBIES;
  genders: MasterDataModel[] = GENDERS;

  selectedColorTheme: number = 0;
  colorTheme = [
    {
      theme: 'bg-success',
      btnTheme: 'btn-success'
    },
    {
      theme: 'bg-primary',
      btnTheme: 'btn-primary'
    }
  ]
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    ) {
    
   }

  ngOnInit(): void {
    
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
    if(event.target.checked){
      this.hobbies.push(event.target.value);
    }
    else if(this.hobbies.length > 0){
      for(let index = 0; index < this.employee.hobbies!!.length; index++ ){
        if(this.employee.hobbies!![index] === event.target.value){
          this.employee.hobbies!!.splice(index, 1);
        }
      }
    }
    else{
      swal.fire(
        'error',
        `Something wrong happened!`,
        'error'
      );
    } 
  }

  globalAtLeastOneChecked(){
    return this.hobbies.length > 0 ? true : false;
  }

  openModalCenter(modalCenter: TemplateRef<any>, title : string, selectedColorTheme: number) {
    this.selectedColorTheme = selectedColorTheme;
    this.modalService.open(modalCenter, {centered: true, ariaLabelledBy: title});
  }

  saveEmployee(modal: TemplateRef<any>){
    this.closeModal(modal);
    swal.fire(
      'Success',
      `Successful!`,
      'success'
    );
  }

  closeModal(modal: TemplateRef<any>){
    this.modalService.dismissAll();
  }
}
