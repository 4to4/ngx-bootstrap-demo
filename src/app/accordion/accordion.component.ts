import { Component, OnInit } from '@angular/core';
import { AccordionModule } from "ngx-bootstrap/accordion";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isFirstOpen: boolean = true;
  customClass: string = 'customClass';

}
