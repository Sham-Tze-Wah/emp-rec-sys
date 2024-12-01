import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-employee-list',
  templateUrl: './sub-employee-list.component.html',
  styleUrls: ['./sub-employee-list.component.css']
})
export class SubEmployeeListComponent {

  @Output() myData = new EventEmitter<string>();
  @Input() childInputBox!: string;

  btnClickTesting(event: any): void {
    // this.myData.emit("This text is from child component");
  }
}
