import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom'
import Login from './screen/Login'
import { useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import routes from './screen/Routes'
import Home from './screen/Home'
import Signup from './screen/Signup'
import Layout from './components/Layout'
import Notfound from './screen/Notfound'
import PartnerMember from './screen/members/PartnerMember'
import PayManagement from './screen/pay/PayManagement'
import PartnerUser from './screen/members/PartnerUser'

function App() {
  let loginToken = localStorage.getItem('isLoggedInVar')

  useEffect(() => {}, [loginToken])

  return (
    <>
      <HelmetProvider>
        <GlobalStyles>
          <Router>
            <Switch>
              <Route exact path={routes.home}>
                {loginToken === 'true' ? (
                  <Layout>
                    <Home />
                  </Layout>
                ) : (
                  <Login />
                )}
              </Route>
              {loginToken === 'false' ? (
                <Route exact path={routes.Signup}>
                  <Signup />
                </Route>
              ) : null}
              <Route exact path={routes.PartnerMember}>
                {loginToken === 'true' ? (
                  <>
                    <Layout>
                      <PartnerMember />
                    </Layout>
                  </>
                ) : null}
              </Route>
              <Route exact path={routes.PayManagement}>
                {loginToken === 'true' ? (
                  <>
                    <Layout>
                      <PayManagement />
                    </Layout>
                  </>
                ) : null}
              </Route>
              <Route exact path={routes.UserMember}>
                {loginToken === 'true' ? (
                  <>
                    <Layout>
                      <PartnerUser />
                    </Layout>
                  </>
                ) : (
                  <Notfound />
                )}
              </Route>
              <Route exact path={routes.UserMember}>
                <Notfound />
              </Route>
            </Switch>
          </Router>
        </GlobalStyles>
      </HelmetProvider>
    </>
  )
}

export default App
