import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import Footer from './Footer';
import ChgState from './ChgState';

export default function DisplayIt(props) {

  let parkList = props.parkList
  let stateName = props.stateName
  let handleSelect = props.handleSelect
  let handleSubmit = props.handleSubmit

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

