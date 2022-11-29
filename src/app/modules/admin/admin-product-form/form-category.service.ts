import { Injectable } from '@angular/core';
import { AdminCategoryNameDto } from '../common/dto/adminCategoryNameDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormCategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<AdminCategoryNameDto>> {
    return this.http.get<Array<AdminCategoryNameDto>>("/api/admin/categories");
  }
}
