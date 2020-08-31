const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();


// weathers {
//   sol
//   Season
//   Last_UTC
//   AT {
//     av
//     mn
//     mx
//   }
//   PRE {
//     av
//     mn
//     mx
//   }
// }
// }
// }

function getWeatherObjects(data) {
  const { sol_keys } = data;
  let weatherObjects = [];
  sol_keys.forEach((sol) => {
    const { AT, PRE, Last_UTC, Season } = data[sol];
    weatherObjects.push({ sol, AT, PRE, Last_UTC, Season });
  });
  if (weatherObjects.length == 0) {
    weatherObjects.push({
      sol: 404, 
      AT: {
        av: 404,
        mn: 404,
        mx: 404
      }, 
      PRE: {
        av: 404,
        mn: 404,
        mx: 404
      }, 
      Last_UTC: 404, 
      Season: 404
    })
  }
  return { weathers: weatherObjects };
}

module.exports = async function fetchNASAData() {
  try {
    const response = await axios.get("https://api.nasa.gov/insight_weather/", {
      params: {
        ver: "1.0",
        feedtype: "json",
        api_key: process.env.NASA_API_KEY,
      },
    });

    return getWeatherObjects(response.data);
  } catch (error) {
    console.log(error);
  }
};
