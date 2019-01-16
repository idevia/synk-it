import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmark, BookmarkList, Category } from './modals/list';

@Injectable({
  providedIn: 'root'
  
})
export class LinkserviceService {

  Categorylist: Observable<Category[]>;
  categoryData: any;
  constructor() {
    // fetch values from firebase
    // assign it to a variable
    // create a method where the valiable will be return
    
  }

  getCategories(): Category[] {
    return this.categoryData.Categories;
  }
}

  
     
  
  
  /** CRUD METHODS */
  // getAllIssues(): void {
  //   this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
  //     this.dataChange.next(data);
  //   },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.name + ' ' + error.message);
  //     });
  // }

  // DEMO ONLY, you can find working methods below
  // addIssue(issue: Issue): void {
  //   this.dialogData = issue;
  // }

  // updateIssue(issue: Issue): void {
  //   this.dialogData = issue;
  // }

  // deleteIssue(id: number): void {
  //   console.log(id);
  // }
