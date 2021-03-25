import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyBranch } from 'src/app/branch';
import { CommunicatorService } from 'src/app/communicator.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  companyForm = this.formBuilder.group({
    id: ['', Validators.required],
    email: ['', Validators.email],
    name: ['', Validators.required],
    totalEmployee: [''],
    address: [''],
    isCompanyActive: [''],
    totalBranch: [''],
  });

  branchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private communicatorService: CommunicatorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.branchForm = this.formBuilder.group({
      branches: this.formBuilder.array([this.createBranchFormGroup()]),
    });

    console.log(this.branchForm);
  }

  public addBranchFormGroup() {
    const branches = this.branchForm.get('branches') as FormArray;
    branches.push(this.createBranchFormGroup());
  }

  public removeOrClearEmail(i: number) {
    const branches = this.branchForm.get('branches') as FormArray;
    if (branches.length > 1) {
      branches.removeAt(i);
    } else {
      branches.reset();
    }
  }

  private createBranchFormGroup(): FormGroup {
    return new FormGroup({
      branchId: new FormControl(''),
      branchName: new FormControl(''),
      address: new FormControl(''),
    });
  }

  getControls() {
    return (this.branchForm.get('branches') as FormArray).controls;
  }

  onSubmit() {
    var companyObj: Company = <Company>this.companyForm.value;
    companyObj.companyBranch = new Array<CompanyBranch>();

    var branchObj: CompanyBranch[] = <CompanyBranch[]>(
      this.branchForm.value.branches
    );

    for (var i = 0; i < branchObj.length; i++) {
      companyObj.companyBranch.push(branchObj[i]);
    }
    let company: Company = this.companyForm.value;
    this.communicatorService.addCompany(companyObj);
    this.router.navigate(['/company/list'])
  }
}
