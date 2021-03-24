export class CompanyBranch {
    branchId: number;
    branchName: string;
    address: string;

    constructor(branchId : number, branchName: string, address: string){
        this.branchId = branchId;
        this.branchName = branchName;
        this.address = address;
    }
}