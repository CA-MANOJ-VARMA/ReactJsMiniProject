import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TablePart from '../Counter'

class Home extends Component {
  render() {
    return (
      <>
        <div className="css-bg-container">
          <Header />
          <TablePart />
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
