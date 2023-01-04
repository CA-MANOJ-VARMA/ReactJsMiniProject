import './index.css'
import {Component} from 'react'
import TablePart from '../Counter'

class Home extends Component {
  render() {
    return (
      <>
        <div className="css-bg-container">
          <TablePart />
        </div>
      </>
    )
  }
}

export default Home
