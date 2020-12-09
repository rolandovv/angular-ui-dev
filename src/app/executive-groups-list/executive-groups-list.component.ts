import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'executive-groups-list',
  templateUrl: './executive-groups-list.component.html',
  styleUrls: ['./executive-groups-list.component.scss']
})
export class ExecutiveGroupsListComponent implements OnInit {

  //DTO of type ReturnValue
  @Input() returnValues: ReturnValue[];

  constructor(private returnValueService: ReturnValueService, private router: Router) { }

  ngOnInit() {

   // this.returnValuesData();
  }

  // Retriving data from the API for array of DTOs
  public returnValuesData() {
     
    this.returnValueService.getExecutivesGroups().subscribe( 
      data =>{
        this.returnValues = [
          {
            resultCode: data[0],
            value: data[1],
            messages: data[2]
          }
        ]
        //console.log( this.returnValues[0].messages);
    })
  }

   // routing to respective component to retrieve single DTO
  viewSingleExecutiveGroup(id: number) {

    this.returnValueService.changeMessage(id);

    let url: string = "/api/executivesGroup/" + id;
    this.router.navigateByUrl(url);
      
  }  

}
