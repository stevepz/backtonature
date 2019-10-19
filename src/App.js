import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import ParkList from './components/ParkList';
import ParkDetail from './components/ParkDetail';
import Footer from './components/Footer';
import DisplayIt from './components/DisplayIt';
import { getParkList } from
  './services/parks-api-helper.js'
import { getLocation } from
  './services/geo-api-helper.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parkList: '',
      park: {},
      stateList: [],
      stateCode: "",
      stateName: ""
    }

  }

  componentDidMount = async () => {
    let location = await getLocation()
    console.log(location)
    this.setState({
      stateName: location.region_name,
      stateCode: location.region_code
    })

    let parkList = await getParkList(this.state.stateCode)
    this.setState({
      parkList: parkList
    })
  }

  // componentDidMount = async () => {
  //   let location = await getLocation()
  //   console.log(location)
  //   this.setState({
  //     stateName: location.region_name,
  //     stateCode: location.region_code
  //   })

  //   let parkList = await getParkList(this.state.stateCode)
  //   this.setState({
  //     parkList: parkList
  //   })
  // }




  render() {
    return (
      <DisplayIt
        parkList={this.state.parkList}
        stateName={this.state.stateName}
      />

      // <div className="App">
      //   <Header />
      //   {this.state.parkList ?
      //     <>
      //       <Route exact path="/" render={() =>
      //         (<ParkList
      //           parkList={this.state.parkList}
      //           stateName={this.state.stateName}
      //         />
      //         )}
      //       />
      //       <Route path='/:parkCode' render={(props) =>
      //         (
      //           <ParkDetail
      //             parkCode={props.match.params.parkCode}
      //           />
      //         )}
      //       />
      //                   <Route path='/chgstate' render={(props) =>
      //         (
      //           <ChgState
      //             need go pass an onclick function so it can update the state ( in state)
      //             then trigger going back tho home and updating the page with the new state
      //           />
      //         )}
      //       />

      //     </>
      //     :
      //     <p></p>
      //   }
      //   <Footer />
      // </div>
    );
  }
}

export default App;




