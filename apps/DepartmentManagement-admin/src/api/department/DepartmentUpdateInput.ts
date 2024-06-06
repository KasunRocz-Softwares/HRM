import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  location?: string | null;
  manager?: string | null;
  name?: string | null;
};
