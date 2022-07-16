import { Component, OnInit } from '@angular/core';
import { IPeople } from '../people';
import { PeoplesService } from '../peoples.service'

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  totals : IPeople [] = [];

  constructor(service: PeoplesService) { 

    service.getPeople().subscribe(data => this.totals = data)


  }

  ngOnInit(): void {
    

  }





}
