import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnValue } from '../model/returnValue';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'executives-list',
  templateUrl: './executives-list.component.html',
  styleUrls: ['./executives-list.component.scss']
})
export class ExecutivesListComponent implements OnInit {

  //DTO of type ReturnValue
  @Input() returnValues: ReturnValue[];
  
  constructor(private returnValueService: ReturnValueService, private router: Router) { }

  ngOnInit() {

  }


  // routing to respective component to retrieve single DTO
  viewSingleExecutive(id: number) {

    this.returnValueService.changeMessage(id);

    let url: string = "api/executives/" + id;
    this.router.navigateByUrl(url);
  }

}
