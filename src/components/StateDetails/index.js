import './index.css'
import {Component} from 'react'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class StateDetails extends Component {
  state = {
    totalCaseDetails: '',
    stateName: '',
    date: '',
    tested: '',
    districtDetails: [],
  }

  componentDidMount() {
    this.fetchStateDetails()
  }

  fetchStateDetails = async () => {
    const totalCasesArray = []
    const districtDetailsArray = []
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const stateFullName = statesList.filter(
      eachState => eachState.state_code === stateCode,
    )
    console.log(stateFullName[0].state_name)

    const baseUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const totalCases = await fetch(baseUrl, options)
    const jsonData = await totalCases.json()
    const districtDetailsPush = Object.entries(
      jsonData[`${stateCode}`].districts,
    )
    console.log(districtDetailsPush[0][0])
    console.log(typeof districtDetailsPush)
    totalCasesArray.push(jsonData[`${stateCode}`])
    districtDetailsArray.push([...districtDetailsPush])
    // console.log(districtDetailsArray)
    this.setState({
      totalCaseDetails: totalCasesArray[0].total,
      stateName: stateFullName[0].state_name,
      date: totalCasesArray[0].meta.date,
      tested: totalCasesArray[0].total.tested,
      districtDetails: districtDetailsArray,
    })
  }

  stateInfo = () => {
    const {date, tested, stateName} = this.state
    return (
      <>
        <div className="css-statename-date-tested-container">
          <div className="css-stateinfo-statename-date-container">
            <p className="css-state-name-paragraph">{stateName}</p>
            <p>Last update on {date}</p>
          </div>
          <div className="css-stateinfo-tested-container">
            <p>Tested</p>
            <p>{tested}</p>
          </div>
        </div>
        <p>Hello</p>
      </>
    )
  }

  confrimedRecoveredDeceasedActive = () => {
    const {totalCaseDetails} = this.state
    const {confirmed, deceased, recovered, tested} = totalCaseDetails

    return (
      <>
        <div className="css-allcases-container">
          <div
            // testid="countryWideConfirmedCases"
            className="css-cases-container css-confirmed"
          >
            <p>Confirmed</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/Group_1_akx5gv.png"
              alt="country wide confirmed cases pic"
              className="css-cases-icon"
            />
            <p>{confirmed}</p>
          </div>
          <div
            className="css-cases-container css-Active"
            // testid="countryWideActiveCases"
          >
            <p>Active</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/protection_1_1_tey5sy.png"
              alt="country wide Active cases pic"
              className="css-cases-icon"
            />
            <p>{confirmed - recovered - deceased}</p>
          </div>
          <div
            className="css-cases-container css-Recovered"
            // testid="countryWideRecoveredCases"
          >
            <p>Recovered</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/recovered_1_1_elprw1.png"
              alt="country wide Recovered cases pic"
              className="css-cases-icon"
            />
            <p>{recovered}</p>
          </div>
          <div
            className="css-cases-container css-Deceased"
            // testid="countryWideDeceasedCases"
          >
            <p>Deceased</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/Corona_Virus_Symptoms_Shortness_of_breath_2_n3zzoj.png"
              alt="country wide Deceased cases pic"
              className="css-cases-icon"
            />
            <p>{deceased}</p>
          </div>
        </div>
      </>
    )
  }

  districtDetailsComponent = () => {
    const {districtDetails} = this.state
    console.log('isArray')
    console.log(Array.isArray(districtDetails))
    return (
      <>
        <ul>
          {districtDetails.map(eachDistrict => (
            <li>{eachDistrict[0][0]}</li>
          ))}
          <li>Hello</li>
        </ul>
      </>
    )
  }

  render() {
    const {totalCaseDetails, date, tested, districtDetails} = this.state
    console.log(tested)
    return (
      <>
        <div className="css-stateDetails-whole-container">
          {this.stateInfo()}
          {this.confrimedRecoveredDeceasedActive()}
          {this.districtDetailsComponent()}
        </div>
      </>
    )
  }
}

export default StateDetails
