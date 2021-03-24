import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommunicatorService } from 'src/app/communicator.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  companyForm = this.fb.group({
    id: [''],
    email: [''],
    name: [''],
    totalEmployee: [''],
    address: [''],
    isCompanyActive: [''],
    totalBranch: [''],
    companyBranches: this.fb.group({
      branchId: [''],
      branchName: [''],
      address: ['']
    }),
  });

  constructor(private fb: FormBuilder, private communicatorService: CommunicatorService) {}

  ngOnInit(): void {}

  onSubmit() {
    let company : Company = this.companyForm.value;
    this.communicatorService.addCompany(company);
    console.log(company);
  }
}
