import axios from 'axios';

export const getLocation = async () => {


  let call =
    `https://freegeoip.app/json/`
  let response = await axios.get(call)
  return (response.data)
}

