import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import StateDetails from './components/StateDetails'
import About from './components/About'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state/:stateCode" component={StateDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
    <Footer />
  </>
)

export default App
