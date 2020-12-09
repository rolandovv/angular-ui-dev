import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, BehaviorSubject, throwError } from 'rxjs';
import { Executives } from '../model/executives';
import { ExecutivesGroup } from '../model/executivesGroup';
import { ReturnValue } from '../model/returnValue';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReturnValueService {

  //mocked API endpoints for retrieving data from a json server
  resultCode_apiURL: string = "http://localhost:3000/resultCode/"
  executiveGroups_apiURL: string = "http://localhost:3000/executiveGroups/"
  executives_apiURL: string = "http://localhost:3000/executives/"
  messages_apiURL: string = "http://localhost:3000/messages/"


  //use BehaviorSubject and observables for comunicating data bewtween components
  private messageSource = new BehaviorSubject<number>(1);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }


  // Fetch array of executivesGroup DTO with forkJoin asynchronous request handling
  getExecutivesGroups(): Observable<any> {

    let serverData1 = this.http.get<ExecutivesGroup[]>(this.resultCode_apiURL);
    let serverData2 = this.http.get<ExecutivesGroup[]>(this.executiveGroups_apiURL);
    let serverData3 = this.http.get<ExecutivesGroup[]>(this.messages_apiURL);

    const urlsArrays = [serverData1, serverData2, serverData3];

    let multiCall = forkJoin(urlsArrays);

    return multiCall
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

//Fetch single executivesGroup DTOs with forkJoin asynchronous request handling
  getSingleExecutivesGroup(id:any): Observable<any> {

    let serverData1 = this.http.get<ExecutivesGroup[]>(this.resultCode_apiURL);
    let serverData2 = this.http.get<ExecutivesGroup[]>(this.executiveGroups_apiURL+id);
    let serverData3 = this.http.get<ExecutivesGroup[]>(this.messages_apiURL);

    const urlsArrays = [serverData1, serverData2, serverData3];

    let multiCall = forkJoin(urlsArrays);

    return multiCall
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

// HttpClient API post() method for adding executivesGroup
  addExecutivesGroup(executivesGroup: ExecutivesGroup) {

    return this.http.post<ExecutivesGroup>(this.executiveGroups_apiURL, executivesGroup)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method for updating executivesGroup
  updateExecutivesGroup(id:any, executivesGroup: ExecutivesGroup) {

    return this.http.put<ExecutivesGroup>(this.executiveGroups_apiURL+id, executivesGroup)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  //Fetch array of excutives DTO with forkJoin asynchronous request handling
  getExecutives(): Observable<any> {

    let serverData1 = this.http.get<Executives[]>(this.resultCode_apiURL);
    let serverData4 = this.http.get<Executives[]>(this.executives_apiURL);
    let serverData3 = this.http.get<Executives[]>(this.messages_apiURL);

    const urlsArrays = [serverData1, serverData4, serverData3];

    let multiCall = forkJoin(urlsArrays);

    return multiCall
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Fetch single excutives DTO with forkJoin asynchronous request handling
  getSingleExecutive(id:any): Observable<any> {

    let serverData1 = this.http.get<ExecutivesGroup[]>(this.resultCode_apiURL);
    let serverData4 = this.http.get<ExecutivesGroup[]>(this.executives_apiURL+id);
    let serverData3 = this.http.get<ExecutivesGroup[]>(this.messages_apiURL);

    const urlsArrays = [serverData1, serverData4, serverData3];

    let multiCall = forkJoin(urlsArrays);

    return multiCall
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addExecutives(executives: Executives) {
    return this.http.post<Executives>(this.executives_apiURL, executives)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateExecutives(id:any, executives: Executives) {
    return this.http.put<ExecutivesGroup>(this.executives_apiURL+id, executives)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
    
  }


  changeMessage(message: number) {
    this.messageSource.next(message);
  }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}