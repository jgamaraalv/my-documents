import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Contracts from "../pages/Contracts";
import Customers from "../pages/Customers";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Contracts} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;