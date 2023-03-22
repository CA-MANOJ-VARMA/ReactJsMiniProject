import './index.css'
import {Component} from 'react'
import Counter from '../Counter'
// import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="css-bg-container">
          <Counter />
        </div>
      </>
    )
  }
}

export default Home
