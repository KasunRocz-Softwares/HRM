import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="jobTitle" source="jobTitle" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <NumberInput label="salary" source="salary" />
      </SimpleForm>
    </Edit>
  );
};
