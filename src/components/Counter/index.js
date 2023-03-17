import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {BiChevronRightSquare} from 'react-icons/bi'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import Loader from 'react-loader-spinner'
import './index.css'

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

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  succes: 'SUCCESS',
  failurre: 'FAILURE',
}

class Counter extends Component {
  state = {
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDeceased: 0,
    stateDetails: '',
    reverse: false,
    searchValueFilter: [],
  }

  componentDidMount() {
    this.fetchCallingFunction()
  }

  searchValueFunction = event => {
    const pushingArray = []
    const {searchValueFilter} = this.state
    const targetSearchValue = event.target.value
    this.setState({searchValue: targetSearchValue})
    if (targetSearchValue !== '') {
      this.setState({
        apiStatus: apiStatusConstants.initial,
      })
      // forEach filtering function

      const stateListSearchReturn = eachItem => {
        this.setState({searchValueFilter: []})

        // console.log('search Value Filter')
        // console.log(searchValueFilter)
        if (
          eachItem.state_name
            .toLowerCase()
            .includes(targetSearchValue.toLowerCase())
        ) {
          pushingArray.push(eachItem)
          //   console.log('search Value Filter')
          //   console.log(searchValueFilter)
        } else {
          this.setState({searchValueFilter: []})
        }
        this.setState({searchValueFilter: pushingArray})
        // console.log('pushing array')
        // console.log(pushingArray)
        searchValueFilter.map(eachState => console.log(eachState))
      }
      // const changeList =
      statesList.forEach(eachItem => stateListSearchReturn(eachItem))
      //   console.log('change list')
      //   console.log(changeList)
    } else {
      this.fetchCallingFunction()
    }
  }

  searchContainer = () => {
    const {searchValueFilter} = this.state
    // console.log('insearchContainer')
    // console.log(searchValueFilter)

    return searchValueFilter.map(eachState => (
      <div className="css-searchContainer-after-filtering">
        <div>
          <p>{eachState.state_name}</p>
        </div>
        <Link
          to={`/state/${eachState.state_code}`}
          className="css-link-styling"
        >
          <div className="css-backgroundColor-stateCode">
            <p>
              {eachState.state_code}
              <BiChevronRightSquare className="css-search-icon-BiChevronRightSquare" />
            </p>
          </div>
        </Link>
      </div>
    ))
  }

  fetchCallingFunction = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const baseUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const totalCases = await fetch(baseUrl, options)
    const jsonData = await totalCases.json()

    this.setState({stateDetails: jsonData})
    console.log(jsonData)
    const covidCasesAllValues = Object.values(jsonData)
    // console.log(covidCasesAllValues)
    covidCasesAllValues.map(eachState =>
      this.setState(prevState => ({
        totalConfirmed: prevState.totalConfirmed + eachState.total.confirmed,
        totalRecovered: prevState.totalRecovered + eachState.total.recovered,
        totalDeceased: prevState.totalDeceased + eachState.total.deceased,
      })),
    )
    this.setState({apiStatus: apiStatusConstants.success})
  }

  renderLoader = () => (
    <div
      className="products-loader-container"
      // testid="homeRouteLoader"
    >
      <Loader
        type="TailSpin"
        color="#0b69ff"
        testid="loader"
        height="50"
        width="50"
      />
    </div>
  )

  onSuccessView = () => {
    const {
      totalConfirmed,
      totalRecovered,
      totalDeceased,
      stateDetails,
    } = this.state
    // console.log(stateDetails)
    // console.log(`total states list - {statesList}`)
    // console.log(statesList.reverse())

    const stateDetailsInTable = (statePassedDetails, statePassedName) => (
      <tr key={statePassedName}>
        <td>{statePassedName}</td>
        <td>{statePassedDetails.total.confirmed}</td>
        <td>{statePassedDetails.total.confirmed}</td>
        <td>{statePassedDetails.total.recovered}</td>
        <td>{statePassedDetails.total.deceased}</td>
        <td>{statePassedDetails.meta.population}</td>
      </tr>
    )

    return (
      <>
        <ul className="css-allcases-container">
          <li
            // testid="countryWideConfirmedCases"
            className="css-cases-container css-confirmed"
            key="1"
          >
            <p>Confirmed</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/Group_1_akx5gv.png"
              alt="country wide confirmed cases pic"
              className="css-cases-icon"
            />
            <p>{totalConfirmed}</p>
          </li>
          <li
            className="css-cases-container css-Active"
            // testid="countryWideActiveCases"
            key="2"
          >
            <p>Active</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/protection_1_1_tey5sy.png"
              alt="country wide Active cases pic"
              className="css-cases-icon"
            />
            <p>{totalConfirmed - totalRecovered - totalDeceased}</p>
          </li>
          <li
            className="css-cases-container css-Recovered"
            // testid="countryWideRecoveredCases"
            key="3"
          >
            <p>Recovered</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/recovered_1_1_elprw1.png"
              alt="country wide Recovered cases pic"
              className="css-cases-icon"
            />
            <p>{totalRecovered}</p>
          </li>
          <li
            className="css-cases-container css-Deceased"
            // testid="countryWideDeceasedCases"
            key="4"
          >
            <p>Deceased</p>
            <img
              src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776776/covid19dashboard/Corona_Virus_Symptoms_Shortness_of_breath_2_n3zzoj.png"
              alt="country wide Deceased cases pic"
              className="css-cases-icon"
            />
            <p>{totalDeceased}</p>
          </li>
        </ul>
        <div
          //   testid="searchResultsUnorderedList"
          className="css-table-container"
        >
          <table>
            <thead className="css-table-header-container">
              <tr>
                <th>
                  States/UT
                  <button
                    type="button"
                    // testid="ascendingSort"
                    className="css-button-asc-desc"
                    onClick={this.ascreverse}
                  >
                    <FcGenericSortingAsc />
                  </button>
                  <button
                    type="button"
                    // testid="descendingSort"
                    className="css-button-asc-desc"
                    onClick={this.descreverse}
                  >
                    <FcGenericSortingDesc />
                  </button>
                </th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {statesList.map(eachState =>
                stateDetailsInTable(
                  stateDetails[eachState.state_code],
                  eachState.state_name,
                ),
              )}
            </tbody>
          </table>
        </div>
      </>
    )
  }

  ascreverse = () => {
    const {reverse} = this.state
    if (reverse) {
      statesList.reverse()
      this.setState({reverse: false})
    }
  }

  descreverse = () => {
    const {reverse} = this.state
    if (!reverse) {
      statesList.reverse()
      this.setState({reverse: true})
      //   console.log('statesList')
      //   console.log(statesList)
    }
  }

  onFetchingDetails = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.onSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchValue, apiStatus} = this.state
    // console.log('render ')
    // console.log(searchValueFilter)
    const apistatustrueorFalse = apiStatus === apiStatusConstants.initial
    return (
      <div className="css-middle-container">
        <div className="css-search-container">
          {/* <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670777171/covid19dashboard/search_x8cc8d.png"
            alt="search"
            className="css-search-icon"
          /> */}
          <BsSearch className="css-search-icon" />
          <input
            type="search"
            placeholder="Enter the state"
            className="css-input-itself"
            onChange={this.searchValueFunction}
            value={searchValue}
          />
        </div>
        <div className="css-searchResults-container">
          {apistatustrueorFalse ? this.searchContainer() : ''}
        </div>
        {this.onFetchingDetails(apiStatus)}
      </div>
    )
  }
}

export default Counter
