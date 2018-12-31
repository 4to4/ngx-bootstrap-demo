import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  defaultAlerts: any[] = [];
  dismissible: boolean = true;

  constructor() {
      this.defaultAlerts = [
      {
        type: 'info',
        msg: 'Some message!',
        addedon: `Added on This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
        timeout: 3000
      },
      {
        type: 'danger',
        msg: 'Some message!',
        addedon: `Added on This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
        timeout: 4000
      },
      {
        type: 'warning',
        msg: 'Some message!',
        addedon: `Added on This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
        timeout: 5000
      },
    ];
  }

  ngOnInit() {
  }

  
  
  
}
