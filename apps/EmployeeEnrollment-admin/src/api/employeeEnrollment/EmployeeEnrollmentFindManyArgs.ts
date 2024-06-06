import { EmployeeEnrollmentWhereInput } from "./EmployeeEnrollmentWhereInput";
import { EmployeeEnrollmentOrderByInput } from "./EmployeeEnrollmentOrderByInput";

export type EmployeeEnrollmentFindManyArgs = {
  where?: EmployeeEnrollmentWhereInput;
  orderBy?: Array<EmployeeEnrollmentOrderByInput>;
  skip?: number;
  take?: number;
};
