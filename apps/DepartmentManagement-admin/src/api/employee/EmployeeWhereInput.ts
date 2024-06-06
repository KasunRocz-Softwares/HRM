import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  salary?: FloatNullableFilter;
};
