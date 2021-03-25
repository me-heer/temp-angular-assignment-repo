import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyBranch } from 'src/app/branch';
import { CommunicatorService } from 'src/app/communicator.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  companyId: number;
  company: Company;

  companyForm = this.formBuilder.group({
    id: [''],
    email: [''],
    name: [''],
    totalEmployee: [''],
    address: [''],
    isCompanyActive: [''],
    totalBranch: [''],
  });

  branchForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private communicatorService: CommunicatorService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.companyId = params['id'];
    });

    this.communicatorService.getCompany(this.companyId).subscribe((company) => {
      this.company = company;
      this.companyForm.patchValue({
        id: this.company.id,
        name: this.company.name,
        email: this.company.email,
        address: this.company.address,
        totalEmployee: this.company.totalEmployee,
        isCompanyActive: this.company.isCompanyActive,
        totalBranch: this.company.totalBranch,
      });

      this.branchForm = this.formBuilder.group({
        branches: this.formBuilder.array([]),
      });
      const branches = this.branchForm.get('branches') as FormArray;
      this.createBranchFormGroup(this.company.companyBranch).forEach(element => {
        branches.push(element);
      });
      
    //  console.log(this.branchForm.value);

    });

  }

  public addBranchFormGroup() {
    const branches = this.branchForm.get('branches') as FormArray;
    branches.push(this.createBranchFormGroupEmpty());
  }

  public removeOrClearEmail(i: number) {
    const branches = this.branchForm.get('branches') as FormArray;
    if (branches.length > 1) {
      branches.removeAt(i);
    } else {
      branches.reset();
    }
  }

  private createBranchFormGroupEmpty(): FormGroup {
    return new FormGroup({
      branchId: new FormControl(''),
      branchName: new FormControl(''),
      address: new FormControl(''),
    });
  }

  private createBranchFormGroup(companyBranches: CompanyBranch[]): FormGroup[] {
    let branches = new Array<FormGroup>();
    companyBranches.forEach(branch => {
      branches.push(
         new FormGroup({
          branchId: new FormControl(branch.branchId),
          branchName: new FormControl(branch.branchName),
          address: new FormControl(branch.address),
         })
      );
      
    });
//console.log('branches');
   // console.log(branches);
    return branches;
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
  }
}
