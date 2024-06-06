import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
