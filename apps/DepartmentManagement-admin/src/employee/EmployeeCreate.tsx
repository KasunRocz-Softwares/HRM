import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
