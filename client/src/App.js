import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Users from './user/pages/Users'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import NewPlace from './places/pages/NewPlace'

function App() {
  return (
    <Router>
      <Route path='/' exact={true}>
        <Users />
      </Route>
      <Route path='/places/new' exact={true}>
        <NewPlace />
      </Route>
    </Router>
  )
}

export default App
