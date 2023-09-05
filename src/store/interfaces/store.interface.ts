import { IAuthState } from "./auth.interface";
import { ICatalogState } from "./catalog.interface";
import { ICompaniesState } from "./companies.interface";

export interface IStore {
  auth: IAuthState;
  catalog: ICatalogState;
  companies: ICompaniesState;
}
