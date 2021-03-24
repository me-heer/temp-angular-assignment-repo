import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  companies: Company[] = [];
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.communicatorService
      .getCompanies()
      .subscribe((companies) => (this.companies = companies));
  }
}
