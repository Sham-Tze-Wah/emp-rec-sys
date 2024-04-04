import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  static transform(event: any) {
    throw new Error('Method not implemented.');
  }

  transform(value: string): string {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/;
    if (!value) return '';
    if(regex.test(value)){
      const datePart = value.split('T')[0];
      return moment(datePart).format('DD/MM/YYYY');
    }
    else{
      return value;
    }
    
    // return moment(value,'yyyy-MM-dd').format('DD/MM/YYYY');
    // return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('DD/MM/YYYY');
  }

}
