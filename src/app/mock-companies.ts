import { Company } from './company';
import { CompanyBranch } from './branch'

export const COMPANIES: Company[] = [
    { 
        id: 1,
        email: "test@test.com",
        name: "Google",
        totalEmployee: 55,
        address: "Test Address",
        isCompanyActive: true,
        totalBranch: 2,
        companyBranch: [
            new CompanyBranch(1, "Test Branch", "Test Branch Address"), 
            new CompanyBranch(2, "Test Branch 2", "Test Branch Address 2")
        ] 
    },
    { 
        id: 2,
        email: "test@test.com",
        name: "Microsoft",
        totalEmployee: 55,
        address: "Test Address",
        isCompanyActive: true,
        totalBranch: 2,
        companyBranch: [
            new CompanyBranch(1, "Test Branch", "Test Branch Address")
        ] 
    },
    { 
        id: 3,
        email: "test@test.com",
        name: "Google",
        totalEmployee: 55,
        address: "Test Address",
        isCompanyActive: true,
        totalBranch: 2,
        companyBranch: [
            new CompanyBranch(1, "Test Branch", "Test Branch Address"), 
            new CompanyBranch(2, "Test Branch 2", "Test Branch Address 2")
        ] 
    }
];
