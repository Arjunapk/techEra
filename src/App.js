import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CoursesDetails from './components/CoursesDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CoursesDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
