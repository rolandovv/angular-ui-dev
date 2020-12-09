import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExecutivesGroup } from '../model/executivesGroup';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'add-executive-group',
  templateUrl: './add-executive-group.component.html',
  styleUrls: ['./add-executive-group.component.scss']
})
export class AddExecutiveGroupComponent implements OnInit {

  executivesGroup: ExecutivesGroup;

  constructor(private returnValueService: ReturnValueService, private router: Router) {

   }

  ngOnInit() {
    
    this.executivesGroup = new ExecutivesGroup();
  }

  //adds the respective DTO to the ExecutivesGroup
  onSubmit() {
      this.returnValueService.addExecutivesGroup(this.executivesGroup).subscribe(
        result => this.gotoExecutivesGroup()
      );
  }

  gotoExecutivesGroup() {
    this.router.navigate(['api/executivesGroup']);
  }

}
