import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeEnrollmentList } from "./employeeEnrollment/EmployeeEnrollmentList";
import { EmployeeEnrollmentCreate } from "./employeeEnrollment/EmployeeEnrollmentCreate";
import { EmployeeEnrollmentEdit } from "./employeeEnrollment/EmployeeEnrollmentEdit";
import { EmployeeEnrollmentShow } from "./employeeEnrollment/EmployeeEnrollmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EmployeeEnrollment"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmployeeEnrollment"
          list={EmployeeEnrollmentList}
          edit={EmployeeEnrollmentEdit}
          create={EmployeeEnrollmentCreate}
          show={EmployeeEnrollmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
