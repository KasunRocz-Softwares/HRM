import { EmployeeFeedback as TEmployeeFeedback } from "../api/employeeFeedback/EmployeeFeedback";

export const EMPLOYEEFEEDBACK_TITLE_FIELD = "id";

export const EmployeeFeedbackTitle = (record: TEmployeeFeedback): string => {
  return record.id?.toString() || String(record.id);
};
