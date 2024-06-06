import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecognitionProgramList } from "./recognitionProgram/RecognitionProgramList";
import { RecognitionProgramCreate } from "./recognitionProgram/RecognitionProgramCreate";
import { RecognitionProgramEdit } from "./recognitionProgram/RecognitionProgramEdit";
import { RecognitionProgramShow } from "./recognitionProgram/RecognitionProgramShow";
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
        title={"RecognitionProgramManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RecognitionProgram"
          list={RecognitionProgramList}
          edit={RecognitionProgramEdit}
          create={RecognitionProgramCreate}
          show={RecognitionProgramShow}
        />
      </Admin>
    </div>
  );
};

export default App;
