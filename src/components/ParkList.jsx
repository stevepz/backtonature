import React from 'react';
import { Link } from 'react-router-dom';

export default function ParkList(props) {
  return (
    <div id="park-l">
      <div id="park-l-container">
        <h2 className="parks-l-head">List of Parks in {props.stateName}</h2>
        <div id="parks-l-info">
          {props.parkList.data.map(
            (park) =>
              (<Link to={`/park:${park.parkCode}`} key={park.id} >
                <div className="parks-l-link">
                  <h1 className="parks-l-name">{park.fullName}</h1>
                  <h2 className="parks-l-designation" > {park.designation}</h2>
                  <h2 className="parks-l-description">{park.description}</h2>

                  {park.images.map(
                    (parkImages, index) =>
                      (
                        <img
                          className='park-l-images'
                          key={parkImages.id}
                          src={parkImages.url}
                          alt={parkImages.altText} />
                      )
                  )
                  }



                </div>
              </Link>
              )
          )
          }
        </div>
      </div>
    </div >
  )
}
