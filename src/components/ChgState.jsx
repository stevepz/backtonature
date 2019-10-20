import React from 'react';

export default function ChgState(props) {

  return (
    <div>
      <form id="state-select" className="state-chg" onSubmit={props.handleSubmit} >
        <select autoFocus onChange={props.handleSelect} defaultValue="Select State">
          <option disabled value="Select State">Select State</option>
          {/* option taklen from https://www.freeformatter.com/usa-state-list-html-select.html 
          and then modified to pass name also*/}
          <option value="AL:Alabama">Alabama</option>
          <option value="AK:Alaska">Alaska</option>
          <option value="AZ:Arizona">Arizona</option>
          <option value="AR:Arkansas">Arkansas</option>
          <option value="CA:California">California</option>
          <option value="CO:Colorado">Colorado</option>
          <option value="CT:Connecticut">Connecticut</option>
          <option value="DE:Delaware">Delaware</option>
          <option value="DC:District Of Columbia">District Of Columbia</option>
          <option value="FL:Florida">Florida</option>
          <option value="GA:Georgia">Georgia</option>
          <option value="HI:Hawaii">Hawaii</option>
          <option value="ID:Idaho">Idaho</option>
          <option value="IL:Illinois">Illinois</option>
          <option value="IN:Indiana">Indiana</option>
          <option value="IA:Iowa">Iowa</option>
          <option value="KS:Kansas">Kansas</option>
          <option value="KY:Kentucky">Kentucky</option>
          <option value="LA:Louisiana">Louisiana</option>
          <option value="ME:Maine">Maine</option>
          <option value="MD:Maryland">Maryland</option>
          <option value="MA:Massachusetts">Massachusetts</option>
          <option value="MI:Michigan">Michigan</option>
          <option value="MN:Minnesota">Minnesota</option>
          <option value="M:Mississippi">Mississippi</option>
          <option value="MO:Missouri">Missouri</option>
          <option value="MT:Montana">Montana</option>
          <option value="NE:Nebraska">Nebraska</option>
          <option value="NV:Nevada">Nevada</option>
          <option value="NH:New Hampshire">New Hampshire</option>
          <option value="NJ:New Jersey">New Jersey</option>
          <option value="NM:New Mexico">New Mexico</option>
          <option value="NY:New York">New York</option>
          <option value="NC:North Carolina">North Carolina</option>
          <option value="ND:North Dakota">North Dakota</option>
          <option value="OH:Ohio">Ohio</option>
          <option value="OK:Oklahoma">Oklahoma</option>
          <option value="OR:Oregon">Oregon</option>
          <option value="PA:Pennsylvania">Pennsylvania</option>
          <option value="RI:Rhode Island">Rhode Island</option>
          <option value="SC:South Carolina">South Carolina</option>
          <option value="SD:South Dakota">South Dakota</option>
          <option value="TN:Tennessee">Tennessee</option>
          <option value="TX:Texas">Texas</option>
          <option value="UT:Utah">Utah</option>
          <option value="VT:Vermont">Vermont</option>
          <option value="VA:Virginia">Virginia</option>
          <option value="WA:Washington">Washington</option>
          <option value="WV:West Virginia">West Virginia</option>
          <option value="WI:Wisconsin<">Wisconsin</option>
          <option value="WY:Wyoming">Wyoming</option>
        </select>

        <input type="submit"
          value="Update State"
        />
      </form>
    </div>
  )
}
