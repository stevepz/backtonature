import React from 'react';
import { Link } from 'react-router-dom';

export default function ParkList(props) {
  return (
    <div id="park">
      <div id="park-list-div">
        <h2 className="parks">PARK LIST</h2>
        <div id="park-list-div2">

          {props.parkList.data.map(
            (park) =>
              (<Link to={`/${park.parkCode}`} key={park.id} >
                <div className="park">
                  <h1 className="park-name">{park.fullName}</h1>
                  {park.images.map(
                    (parkImages) =>
                      (<img className="park-images" key={parkImages.id}
                        src={parkImages.url}
                        alt={parkImages.altText} />
                      )
                  )
                  }
                  <h2 className="park-name" > {park.designation}</h2>
                  <h2 className="park-name">{park.description}</h2>
                </div>
              </Link>
              )
          )
          }
        </div>
      </div>
    </div>
  )
}


// {
//   props.heroes.map(
//     (hero) =>
//       (<Link to={`/${hero.hero_id}`} key={hero.id} >
//         <div className="xmen">
//           <img className="xmen-imgs" src={hero.image_url} alt="xmen" />
//           <h2 className="xmen-name">{hero.name}</h2>
//         </div>
//       </Link>
//       )
//   )
// }