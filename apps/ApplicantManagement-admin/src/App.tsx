import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApplicantList } from "./applicant/ApplicantList";
import { ApplicantCreate } from "./applicant/ApplicantCreate";
import { ApplicantEdit } from "./applicant/ApplicantEdit";
import { ApplicantShow } from "./applicant/ApplicantShow";
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
        title={"ApplicantManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Applicant"
          list={ApplicantList}
          edit={ApplicantEdit}
          create={ApplicantCreate}
          show={ApplicantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
