import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  manager?: StringNullableFilter;
  name?: StringNullableFilter;
};
