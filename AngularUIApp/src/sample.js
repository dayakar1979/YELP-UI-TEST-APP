var sampleJs = function() {
'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'wV6LiKOide921Z2lA9dmbe_uySVYXBP4LvT6BwJFC2LWOyPX0SqsTBEyN6Ro82xBH91WQZbIWm4VRdAdgtEjjdcRImlqZctn-QWisKsRya7OXF-NRZWhqx45cJYsYHYx';

const searchRequest = {
  term:'Ice Cream',
  location: 'alpharetta,ga'
};

const client = yelp.client(apiKey);

function getData() {

client.search(searchRequest).then(response => {
  //const firstResult = response.jsonBody.businesses[0];
  // response.jsonBody.businesses.forEach(element => {
  //   const prettyJson = JSON.stringify(element, null, 4);
  //   console.log(prettyJson);
  // });
  // const prettyJson = JSON.stringify(firstResult, null, 4);
  // console.log(prettyJson);
  response.jsonBody.businesses.forEach(iterate);
}).catch(e => {
  console.log(e);
});
}
function iterate(item, index) {
      if(index < 5) {
     //const prettyJson = JSON.stringify(item, null, 4);
     
     client.reviews(item.id).then(response => {
      console.log('Record: ' + (index+1) + '  Start.');
      console.log(item.name);
      console.log(item.location.address1 +', ' + item.location.city + ', ' + item.location.state + '.');
      console.log(response.jsonBody.reviews[0].text);
      console.log(response.jsonBody.reviews[0].user.name);
      console.log('Record: ' + (index+1) + '  End.');
     })
     
    }
}
}