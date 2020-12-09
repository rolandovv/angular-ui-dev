import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Executives } from '../model/executives';
import { ExecutivesGroup } from '../model/executivesGroup';
import { ReturnValueService } from '../services/return-value.service';

@Component({
  selector: 'app-add-executives',
  templateUrl: './add-executives.component.html',
  styleUrls: ['./add-executives.component.scss']
})
export class AddExecutivesComponent implements OnInit {

  executives: Executives;

  constructor(private returnValueService: ReturnValueService, private router: Router) { 
  }

  ngOnInit() {

    this.executives = new Executives();
  }

//adds the respective DTO to the executives
  onSubmit() {
    this.returnValueService.addExecutives(this.executives).subscribe(
      result => this.gotoExecutives()
    );
  }

  gotoExecutives() {
    this.router.navigate(['api/executives']);
  }

}
