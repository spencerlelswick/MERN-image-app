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
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './user/pages/Auth'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact={true}>
            <Users />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/:userId/places'>
            <UserPlaces />
          </Route>
          <Route path='/places/new' exact={true}>
            <NewPlace />
          </Route>
          <Route path='/places/:placeId'>
            <UpdatePlace />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
