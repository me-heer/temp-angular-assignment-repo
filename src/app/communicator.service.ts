import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})

export class CommunicatorService {

  constructor(private http: HttpClient, private dataService: DataService) {
  }

  getCompanies(): Observable<Company[]>{
    return this.dataService.getCompanies();
  }

  getCompany(id: number): Observable<Company>{
    return this.dataService.getCompany(id);
  }

  addCompany(company: Company): void{
    this.dataService.addCompany(company);
  }

}
