import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExecutivesGroup } from '../model/executivesGroup';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'executives-group',
  templateUrl: './executives-group.component.html',
  styleUrls: ['./executives-group.component.scss']
})
export class ExecutivesGroupComponent implements OnInit {

  // @Input() returnSingleValue: ReturnValue;

  returnSingleValue: ReturnValue;
  executivesGroup: ExecutivesGroup;

  editGroup: boolean = false;
  wrongVersion: boolean = false;

  constructor(private returnValueService: ReturnValueService, private router: Router) {
   }

  ngOnInit() {

    this.executivesGroup = new ExecutivesGroup();
    this.returnSingleValueData();

  }

  //Retrieving data from the API for single DTO
  public returnSingleValueData() {
    this.returnValueService.currentMessage.subscribe(message => this.executivesGroup.id = message);

      this.returnValueService.getSingleExecutivesGroup(this.executivesGroup.id).subscribe(data => {
        this.returnSingleValue =
          {
            resultCode: data[0],
            value: data[1],
            messages: data[2]
          }
        // console.log("singleValue is: " + this.returnSingleValues[0]);
      })
  }

  edit(){
    this.editGroup = !this.editGroup;

    this.executivesGroup.id = this.returnSingleValue.value.id;
    this.executivesGroup.name = this.returnSingleValue.value.name;
    this.executivesGroup.version = this.returnSingleValue.value.version;  

  }

  onSubmit() {

    //handles optimistic concurrency 
    if(this.executivesGroup.version == this.returnSingleValue.value.version){

      this.returnValueService.updateExecutivesGroup(this.executivesGroup.id, this.executivesGroup).subscribe(
        result => this.gotoExecutivesGroup()
      );
    } else{

      this.wrongVersion = true;
    }
  }

  gotoExecutivesGroup() {
    this.router.navigate(['api/executivesGroup']);
  }

}