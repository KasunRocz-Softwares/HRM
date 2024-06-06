import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  location?: string | null;
  manager?: string | null;
  name?: string | null;
};
