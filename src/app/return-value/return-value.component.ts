import { Component, OnInit } from '@angular/core';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

import { Router } from '@angular/router';

@Component({
  selector: 'return-value',
  templateUrl: './return-value.component.html',
  styleUrls: ['./return-value.component.scss']
})
export class ReturnValueComponent implements OnInit {

  //DTO of type ReturnValue
  returnValuesExeGroupList: ReturnValue[];
  
  constructor(private returnValueService: ReturnValueService, private router: Router) { }

  ngOnInit() {

    this.returnValuesData();
  }

   // Retriving data from the API for array of DTOs
   public returnValuesData() {
     
    this.returnValueService.getExecutivesGroups().subscribe( 
      data =>{
        this.returnValuesExeGroupList = [
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
