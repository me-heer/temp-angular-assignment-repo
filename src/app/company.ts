import { CompanyBranch } from './branch';

export class Company{
    id: number;
    email: string;
    name: string;
    totalEmployee: number;
    address: string;
    isCompanyActive: boolean;
    totalBranch: number;
    companyBranch: Array<CompanyBranch>;

    constructor(id: number, email: string, name: string, totalEmployee: number, address: string, isCompanyActive: boolean, totalBranch: number, companyBranch: Array<CompanyBranch>){
        this.id = id;
        this.email = email;
        this.name = name;
        this.totalEmployee = totalEmployee;
        this.address = address;
        this.isCompanyActive = isCompanyActive;
        this.totalBranch = totalBranch;
        this.companyBranch = companyBranch;
    }
}