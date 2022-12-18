import {Component} from 'react'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  succes: 'SUCCESS',
  failurre: 'FAILURE',
}

class TablePart extends Component {
  state = {
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    totalConfirmed: 0,
    totalActive: 0,
    totalRecovered: 0,
    totalDeceased: 0,
  }

  componentDidMount() {
    this.fetchCallingFunction()
  }

  searchValueFunction = event => {
    this.setState({searchValue: event.target.value})
  }

  fetchCallingFunction = async () => {
    const {
      totalConfirmed,
      totalActive,
      totalRecovered,
      totalDeceased,
      apiStatus,
    } = this.state
    this.setState({apiStatus: apiStatusConstants.progress})
    const baseUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const totalCases = await fetch(baseUrl, options)
    const jsonData = await totalCases.json()
    const covidCasesAllValues = Object.values(jsonData)
    // console.log(covidCasesAllValues)
    covidCasesAllValues.map(eachState =>
      this.setState(prevState => ({
        totalConfirmed: prevState.totalConfirmed + eachState.total.confirmed,
        totalActive: prevState.totalActive + eachState.total.tested,
        totalRecovered: prevState.totalRecovered + eachState.total.recovered,
        totalDeceased: prevState.totalDeceased + eachState.total.deceased,
      })),
    )
    this.setState({apiStatus: apiStatusConstants.success})
  }

  render() {
    const {
      searchValue,
      totalConfirmed,
      totalActive,
      totalRecovered,
      totalDeceased,
      apiStatus,
    } = this.state
    console.log(totalConfirmed, totalActive, totalRecovered, totalDeceased)
    return (
      <div className="css-middle-container">
        <div className="css-search-container">
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670777171/covid19dashboard/search_x8cc8d.png"
            alt="search"
            className="css-search-icon"
            onChange={this.searchValueFunction}
            value={searchValue}
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
