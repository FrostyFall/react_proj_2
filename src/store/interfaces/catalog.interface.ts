import { ICatalog } from "src/utils/interfaces/catalog.interface";
import { IUser } from "src/utils/interfaces/user.interface";

export interface ICatalogState {
  data: ICatalog[];
  activatedCatalog: ICatalog | null;
}
