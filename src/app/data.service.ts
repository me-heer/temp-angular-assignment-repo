import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db: Company[] = [];
  status: string;
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
    return this.http.post(this.baseURL + 'company', body,{'headers':headers})
  }

  updateCompany(id:number, company: Company): Observable<any>{
    console.log('company:', company);
    company.id = id;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(company);
    console.log('body:' + body);
    return this.http.put<any>(this.baseURL +'company/' + id, body, {'headers':headers});
  }

  deleteCompany(id: number){
    this.http.delete(this.baseURL + 'company/' + id)
        .subscribe(() => this.status = 'Delete successful');
  }
}
