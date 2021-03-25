import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/company';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  companies: Company[] = [];
  constructor(private communicatorService: CommunicatorService) {
    this.getCompanies();
  }

  ngOnInit(): void {
  }

  getCompanies(): void {
    this.communicatorService
      .getCompanies()
      .subscribe((companies) => (this.companies = companies));
  }
  delete(id :number){
    var index = this.companies.indexOf(this.companies.find(c => c.id == id));
    if(index > -1){
      this.companies.splice(index, 1);
    }
  }
}
