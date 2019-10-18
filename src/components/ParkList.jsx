import React from 'react';
import { Link } from 'react-router-dom';

export default function ParkList(props) {

  console.log('here3', props.parkList.data[0])
  console.log('here3', props.parkList.data[0].images[0].url)

  return (
    <div id="park">
      <div id="park-list-div">
        <h2 className="parks">PARK LIST</h2>
        <div id="park-list-div2">

          {props.parkList.data.map(
            (park) =>
              (
                <div className="park" key={park.id}>
                  <h1 className="park-name">{park.fullName}</h1>
                  {/* <img className="park-name" src={park.images[0].url} alt="asd" />
                  <h2 className="park-name">{park.designation}</h2> */}
                  <h2 className="park-name">{park.description}</h2>
                </div>
              )
          )
          }
        </div>
      </div>
    </div >
  )
}


// (<Link to={`/${hero.hero_id}`} key={hero.id} >
//   <div className="xmen">
//     <img className="xmen-imgs" src={hero.image_url} alt="xmen" />
//     <h2 className="xmen-name">{hero.name}</h2>
//   </div>
// </Link>