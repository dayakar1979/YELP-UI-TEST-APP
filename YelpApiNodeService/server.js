const yelp = require('yelp-fusion');
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
app.use(bodyParser.json());
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'wV6LiKOide921Z2lA9dmbe_uySVYXBP4LvT6BwJFC2LWOyPX0SqsTBEyN6Ro82xBH91WQZbIWm4VRdAdgtEjjdcRImlqZctn-QWisKsRya7OXF-NRZWhqx45cJYsYHYx';
const searchRequest = {
  term:'Ice Cream',
  location: 'alpharetta,ga'
};
const count = 5;
const client = yelp.client(apiKey);
const businesses = [];

app.get('/api/getBusinesses', (req, res) => {
    client.search(searchRequest).then(response => {
      response.jsonBody.businesses.forEach(iterate);
      
    }).catch(e => {
      console.log(e);
    });

    function iterate(item, index) {
      if(index < count) {
          client.reviews(item.id).then(response => {
          let address = item.location.address1 +', ' + item.location.city + ', ' + item.location.state + '.';
          let business = {
            name : item.name,
            address : address,
            review : response.jsonBody.reviews[0].text,
            reviewer : response.jsonBody.reviews[0].user.name 
          }
          businesses.push(business);
          if(businesses.length == count) {
            res.json(businesses);
          }
        })
      } 
    }
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
