import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "./screen/Login";
import { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import routes from "./screen/Routes";
import Home from "./screen/Home";
import Signup from "./screen/Signup";
import Layout from "./components/Layout";
import Notfound from "./screen/Notfound";
import PartnerMember from "./screen/members/PartnerMember";

function App() {
  let loginToken = localStorage.getItem("isLoggedInVar");

  useEffect(() => {
  }, [loginToken]);
  
  return (
    <>
      <HelmetProvider>
        <GlobalStyles>
          <Router>
            <Switch>
              <Route exact path={routes.home}>
                {
                  loginToken === 'true' ? (
                    <Layout>
                      <Home /> 
                    </Layout>
                  ) : (
                  <Login />
                  )
                }
              </Route>
              {
                loginToken === 'false' ? (
                  <Route exact path={routes.Signup}>
                    <Signup />
                  </Route>
                ) : null
              }
              <Route exact path={routes.PartnerMember}>
                {
                  loginToken === 'true' ? (
                    <>
                      <Layout>
                        <PartnerMember />
                      </Layout>
                    </>
                  ) : null
                }
              </Route>
              <Route>
                <Notfound />
              </Route>
            </Switch>
          </Router>
        </GlobalStyles>
      </HelmetProvider>
    </>
  );
}

export default App;
