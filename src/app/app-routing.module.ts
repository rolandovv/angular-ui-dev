import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddExecutiveGroupComponent } from './add-executive-group/add-executive-group.component';
import { AddExecutivesComponent } from './add-executives/add-executives.component';
import { ExecutiveGroupsListComponent } from './executive-groups-list/executive-groups-list.component';
import { ExecutiveComponent } from './executive/executive.component';
import { ExecutivesGroupComponent } from './executives-group/executives-group.component';
import { ExecutivesListComponent } from './executives-list/executives-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReturnValueExecutivesComponent } from './return-value-executives/return-value-executives.component';
import { ReturnValueComponent } from './return-value/return-value.component';
import { SuccessPageComponent } from './success-page/success-page.component';


const routes: Route[] = [
  {path: '', redirectTo: '/api/executivesGroup', pathMatch: 'full' },
  {path: 'api/executivesGroup', component: ReturnValueComponent},
  {path: 'api/executivesGroup/:id', component: ExecutivesGroupComponent},
  {path: 'api/addExecutiveGroup', component: AddExecutiveGroupComponent},
  // {path: 'api/executivesGroup2', component: ExecutiveGroupsListComponent},
  // {path: 'api/executivesList', component: ExecutivesListComponent},
  {path: 'api/executives', component: ReturnValueExecutivesComponent},
  {path: 'api/addExecutives', component: AddExecutivesComponent},
  {path: 'api/executives/:id', component: ExecutiveComponent},
  {path: 'api/success', component: SuccessPageComponent},
  {path:'**', component: PageNotFoundComponent}
  
  // {path: 'api/executivesGroup/id', component: ExecutivesGroupComponent}
  // {path: 'executivesGroupComponent', component: ExecutivesGroupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
