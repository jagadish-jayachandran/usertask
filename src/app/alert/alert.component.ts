import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @ViewChild('alert', { static: true }) alert: ElementRef | any;
  constructor() { }

  ngOnInit(): void {
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

}
