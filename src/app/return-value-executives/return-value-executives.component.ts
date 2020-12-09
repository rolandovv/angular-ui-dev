import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'app-return-value-executives',
  templateUrl: './return-value-executives.component.html',
  styleUrls: ['./return-value-executives.component.scss']
})
export class ReturnValueExecutivesComponent implements OnInit {

  //DTO of type ReturnValue
  returnValue: ReturnValue[];
  
  constructor(private returnValueService: ReturnValueService) { }

  ngOnInit() {

    this.returnValuesData();
  }

  // Retriving data from the API for array of DTOs
  public returnValuesData() {
     
    this.returnValueService.getExecutives().subscribe( 
      data =>{
        this.returnValue = [
          {
            resultCode: data[0],
            value: data[1],
            messages: data[2]
          }
        ]
        //console.log( this.returnValues[0].messages);
    })
  }

}
