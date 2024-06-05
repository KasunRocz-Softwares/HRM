import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  jobTitle?: string | null;
  name?: string | null;
  phone?: string | null;
  salary?: number | null;
};
