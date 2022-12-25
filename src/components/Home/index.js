import './index.css'
import {Component} from 'react'

import Footer from '../Footer'
import TablePart from '../Counter'

class Home extends Component {
  render() {
    return (
      <>
        <div className="css-bg-container">
          <TablePart />
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
