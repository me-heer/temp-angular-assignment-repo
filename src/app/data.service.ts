import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommunicatorService } from './communicator.service';
import { Company } from './company';
import { CompanyBranch } from './branch';
import * as companies from '../assets/data/company.json'; // This import style requires "esModuleInterop", see "side notes"

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db: Company[] = [];

  constructor() {
    this.db = (companies as any).default;
  }

  getCompanies(): Observable<Company[]> {
    const companies = of(this.db);
    return companies;
  }

  addCompany(company: Company): void{
    this.db.push(company);
  }
}
