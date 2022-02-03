import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServicesService } from '../api-services.service';
import datavalues from 'src/app/data.json';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

@Input() taskAlert:any = "";



  constructor(

  ) {}
  ngOnInit(): void {
 
  }
  close() {
    
  }
  onSubmit() {
    
  }
 
}
