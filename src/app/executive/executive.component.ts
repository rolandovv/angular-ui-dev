import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Executives } from '../model/executives';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.scss']
})
export class ExecutiveComponent implements OnInit {

  returnSingleValue: ReturnValue;
  executives: Executives;

  editGroup: boolean = false;
  wrongVersion: boolean = false;

  constructor(private returnValueService: ReturnValueService, private router: Router) { }

  ngOnInit() {

    this.executives = new Executives();
    this.returnSingleValueData();
  }

  //Retrieving data from the API for single DTO
  returnSingleValueData() {

      this.returnValueService.currentMessage.subscribe(message => this.executives.id = message);

      this.returnValueService.getSingleExecutive(this.executives.id).subscribe(data => {
      this.returnSingleValue = 
        {
          resultCode: data[0],
          value: data[1],
          messages: data[2]
        }
      //  console.log( "singleValue is: "+this.returnValues[0].value.id);
    })
  }

  edit(){
    this.editGroup = !this.editGroup;

    this.executives.id = this.returnSingleValue.value.id;
    this.executives.lastName = this.returnSingleValue.value.lastName;
    this.executives.firstName = this.returnSingleValue.value.firstName;
    this.executives.initials = this.returnSingleValue.value.initials;
    this.executives.systemInitials = this.returnSingleValue.value.systemInitials;
    this.executives.title = this.returnSingleValue.value.title;
    this.executives.postTitle = this.returnSingleValue.value.postTitle;
    this.executives.salutation = this.returnSingleValue.value.salutation;
    this.executives.jobTitle = this.returnSingleValue.value.jobTitle;
    this.executives.version = this.returnSingleValue.value.version;
    this.executives.executivesGroup = this.returnSingleValue.value.executivesGroup;  
  }


  onSubmit() {

    //handles optimistic concurrency 
    if(this.executives.version == this.returnSingleValue.value.version){

      this.returnValueService.updateExecutives(this.executives.id, this.executives).subscribe(
        result => this.gotoExecutives()
      );
      //console.log(this.home);
    } else{

      this.wrongVersion = true;
    }
  }

  gotoExecutives() {
    this.router.navigate(['api/executives']);
  }

}
