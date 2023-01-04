import './App.css'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import StateDetails from './components/StateDetails'
import About from './components/About'
import Footer from './components/Footer'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state/:stateCode" component={StateDetails} />
      <Route exact path="/About" component={About} />
    </Switch>
    <Footer />
  </>
)

export default App
