import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CommunicatorService {
  companies: Observable<Company[]>;

  constructor(private http: HttpClient) {
    this.companies = <Observable<Company[]>>this.http.get('../assets/data/company.json');
  }

  getCompanies(): Observable<Company[]>{
    this.companies = <Observable<Company[]>>this.http.get('../assets/data/company.json');
    return this.companies;
  }

}
