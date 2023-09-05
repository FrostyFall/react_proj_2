import { ICatalog } from "src/utils/interfaces/catalog.interface";
import { ICompany } from "src/utils/interfaces/company.interface";
import { IUser } from "src/utils/interfaces/user.interface";

export interface ICompaniesState {
  data: ICompany[];
  activatedCompany: ICompany | null;
}
