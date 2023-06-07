import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import './App.css'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact={true}>
            <Users />
          </Route>
          <Route path='/places/new' exact={true}>
            <NewPlace />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
