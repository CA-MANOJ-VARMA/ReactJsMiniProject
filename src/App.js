import './App.css'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import StateDetails from './components/StateDetails'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state/:stateCode" component={StateDetails} />
    </Switch>
  </>
)

export default App
