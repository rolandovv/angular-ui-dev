import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecutivesGroupComponent } from './executives-group/executives-group.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReturnValueComponent } from './return-value/return-value.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddExecutiveGroupComponent } from './add-executive-group/add-executive-group.component';
import { FormsModule } from '@angular/forms';
import { SuccessPageComponent } from './success-page/success-page.component';
import { ReturnValueExecutivesComponent } from './return-value-executives/return-value-executives.component';
import { AddExecutivesComponent } from './add-executives/add-executives.component';
import { ExecutiveComponent } from './executive/executive.component';
import { ExecutiveGroupsListComponent } from './executive-groups-list/executive-groups-list.component';
import { ExecutivesListComponent } from './executives-list/executives-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExecutivesGroupComponent,
    ReturnValueComponent,
    PageNotFoundComponent,
    AddExecutiveGroupComponent,
    SuccessPageComponent,
    ReturnValueExecutivesComponent,
    AddExecutivesComponent,
    ExecutiveComponent,
    ExecutiveGroupsListComponent,
    ExecutivesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
