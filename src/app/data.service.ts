import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db: Company[] = [];
  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.http
      .get<Company[]>(this.baseURL + 'company')
      .subscribe((data) => (this.db = data));
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseURL + 'company');
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.baseURL + 'company/'+ id);
  }

  addCompany(company: Company): void {
    this.db.push(company);
  }

  postCompany(company: Company): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(company);
    console.log(body)
    return this.http.post(this.baseURL + 'company', body,{'headers':headers})
  }
}
