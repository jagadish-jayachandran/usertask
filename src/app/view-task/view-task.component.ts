import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import dat from '../data.json';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
  providers: [DatePipe]
})
export class ViewTaskComponent implements OnInit {
  usersList: any;
  tasksList: any;
  remainingText:any;
  value:any ="";
  desc:any ="";
  myDate:any = new Date();

  visibleFlag = false;
  expiryDate: any = "";
  selectValue: any = '';
  taskAlert: any;
  alertNotify: boolean = false;

  constructor( private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'MM/dd/yyyy');

   }
  dataValue =dat ;
  ngOnInit(): void {
    // console.log(this.dataValue);
    this.usersList = this.dataValue.Users;
    this.tasksList = this.dataValue.Tasks;
console.log("usres",this.usersList);

    
  }
  valueChange(value:any) {
    this.remainingText = 100 - value.length;
   }
   onChange(valu:any) {
    console.log(valu);
    this.selectValue = valu.target.value;
}
   onSubmit() {
    this.expiryDate = this.datePipe.transform(this.expiryDate, 'MM/dd/yyyy');
if(this.desc == "" ) {
    this.alertNotify = true;
  return
}
if(this.selectValue == "") {
  this.alertNotify = true;

  return
} 
if(this.expiryDate == "") {
  this.alertNotify = true;

  return
}
     let task = {
      "Task":this.desc,
      "Expiry_date": this.expiryDate,
      "User":this.selectValue,
      "Important":this.visibleFlag,
      "Created_on":this.myDate
  }
     console.log(task);
     this.tasksList.push(task);
     this.taskAlert = task

   }
   removeRow(list:any,ind:any) {
    //  this.tasksList.slice()
    console.log(ind);
    const index = this.tasksList.indexOf(list);
if (index > -1) {
  this.tasksList.splice(index, 1); // 2nd parameter means remove one item only
}

console.log(this.tasksList);

    
   }
   onChangeText(next:any,value:any) {
     this.tasksList.forEach((element:any,i:any) => {
       if(next == element) {
        element.User = value.target.value;
       }
       
     });
     console.log(this.tasksList);
     
   }
}
