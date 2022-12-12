import {Component} from 'react'
import './index.css'

class TablePart extends Component {
  render() {
    return (
      <div className="css-middle-container">
        <div className="css-search-container">
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670777171/covid19dashboard/search_x8cc8d.png"
            alt="search"
            className="css-search-icon"
          />

          <input
            type="search"
            placeholder="Enter the state"
            className="css-input-itself"
          />
        </div>
        <div className="css-allcases-container">
          <div className="css-cases-container css-confirmed">
            <p>Confirmed</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/Group_1_akx5gv.png"
              alt="confirmed"
              className="css-cases-icon"
            />
            <p>34285612</p>
          </div>
          <div className="css-cases-container css-Active">
            <p>Active</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/protection_1_1_tey5sy.png"
              alt="active"
              className="css-cases-icon"
            />
            <p>34285612</p>
          </div>
          <div className="css-cases-container css-Recovered">
            <p>Recovered</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/recovered_1_1_elprw1.png"
              alt="recovered"
              className="css-cases-icon"
            />
            <p>34285612</p>
          </div>
          <div className="css-cases-container css-Deceased">
            <p>Deceased</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/Corona_Virus_Symptoms_Shortness_of_breath_2_n3zzoj.png"
              alt="deceased"
              className="css-cases-icon"
            />
            <p>34285612</p>
          </div>
        </div>
        <div>table container</div>
      </div>
    )
  }
}

export default TablePart
