import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};
