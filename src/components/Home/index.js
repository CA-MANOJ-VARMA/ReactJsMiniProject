import './index.css'
import {Component} from 'react'
import Counter from '../Counter'

class Home extends Component {
  render() {
    return (
      <>
        <div className="css-bg-container">
          <Counter />
        </div>
      </>
    )
  }
}

export default Home
