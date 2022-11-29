import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SidebarCategory } from './model/sidebarCategory';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<SidebarCategory>>{
    return this.http.get<Array<SidebarCategory>>("/api/categories");
  }
}
