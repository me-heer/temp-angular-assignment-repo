import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    //this.dataService.addCompany(company);
    this.dataService.postCompany(company).subscribe();
  }

  updateCompany(id:number, company: Company): void{
    console.log('company:', company);
    this.dataService.updateCompany(id, company).subscribe();
  }

  deleteCompany(id: number): void{
    this.dataService.deleteCompany(id);
  }

}
