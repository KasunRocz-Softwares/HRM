import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeFeedbackList } from "./employeeFeedback/EmployeeFeedbackList";
import { EmployeeFeedbackCreate } from "./employeeFeedback/EmployeeFeedbackCreate";
import { EmployeeFeedbackEdit } from "./employeeFeedback/EmployeeFeedbackEdit";
import { EmployeeFeedbackShow } from "./employeeFeedback/EmployeeFeedbackShow";
import { PerformanceReviewList } from "./performanceReview/PerformanceReviewList";
import { PerformanceReviewCreate } from "./performanceReview/PerformanceReviewCreate";
import { PerformanceReviewEdit } from "./performanceReview/PerformanceReviewEdit";
import { PerformanceReviewShow } from "./performanceReview/PerformanceReviewShow";
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
        title={"EmployeeFeedback"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmployeeFeedback"
          list={EmployeeFeedbackList}
          edit={EmployeeFeedbackEdit}
          create={EmployeeFeedbackCreate}
          show={EmployeeFeedbackShow}
        />
        <Resource
          name="PerformanceReview"
          list={PerformanceReviewList}
          edit={PerformanceReviewEdit}
          create={PerformanceReviewCreate}
          show={PerformanceReviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
