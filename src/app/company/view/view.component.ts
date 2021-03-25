import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicatorService } from 'src/app/communicator.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private communicatorService: CommunicatorService
  ) {}
  company :Company;
  companyId:number;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.companyId = params['id'];
    });

    this.communicatorService.getCompany(this.companyId).subscribe((company) => {
      this.company = company;
    });
  }

}
