import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import Footer from './Footer';
import ChgState from './ChgState';
import { getParkList } from
  '../services/parks-api-helper.js'
import { getLocation } from
  '../services/geo-api-helper.js'


export default function DisplayIt(props) {

  let parkList = props.parkList
  let stateName = props.stateName
  let handleSelect = props.handleSelect
  let handleSubmit = props.handleSubmit

  console.log('ss', props)
  // console.log('tt', props.parkList)
  // console.log('tt', props.stateName)
  console.log('display check if passed', handleSelect, handleSubmit)

  return (
    <div className="App">
      <Header />
      {parkList ?
        <>
          <Route exact path="/" render={() =>
            (<ParkList
              parkList={parkList}
              stateName={stateName}
            />
            )}
          />
          <Route path='/park:parkCode' render={(props) =>
            (
              <ParkDetail
                parkCode={props.match.params.parkCode}
              />
            )}
          />
          <Route exact path='/chgstate' render={(props) =>
            (
              <ChgState
                handleSelect={handleSelect}
                handleSubmit={handleSubmit}
              // need go pass an onclick function so it can update the state ( in state)
              //     then trigger going back tho home and updating the page with the new state
              />
            )}
          />

        </>
        :
        <p></p>
      }
      <Footer />
    </div>
  );
}

