import { EmployeeEnrollment as TEmployeeEnrollment } from "../api/employeeEnrollment/EmployeeEnrollment";

export const EMPLOYEEENROLLMENT_TITLE_FIELD = "id";

export const EmployeeEnrollmentTitle = (
  record: TEmployeeEnrollment
): string => {
  return record.id?.toString() || String(record.id);
};
