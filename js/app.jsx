import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import fetchJsonp from 'fetch-jsonp';
import 'whatwg-fetch';
import '../main.scss';
function my_jsonp(data) {
  console.log(data);
}

// coś takiego trzeba dodać, by działało na IE?
// require('es6-promise').polyfill();

import {NotFound} from './components/not_found.jsx';


class App extends React.Component {
  exampleFetch = () => {
    //return fetch("http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/PL/EUR/en-GB/WARS/anywhere/2017-05-10/2017-05-15?apiKey=ma904275275722512047339227598651", {
    //   method: 'get',
    //   dataType: 'jsonp',
    //   mode: 'no-cors',
    //   headers: {
    //       'Accept': 'application/json'
    //   }})
    return fetchJsonp("http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/PL/EUR/en-GB/WARS/anywhere/2017-05-10/2017-05-15?apiKey=ma904275275722512047339227598651", {
      method: 'get',
      dataType: 'json',
      headers: {
          'Accept': 'application/json'
      }
    })
    .then(data => {
      console.dir(data);
      console.log(data);
      return data.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
    // fetch('http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/PL/EUR/en-GB/WARS/anywhere/2017-05-10/2017-05-15?apiKey=ma904275275722512047339227598651', {
    //               method: 'get',
    //               headers: {
    //                   'Accept': 'application/json'
    //               }}).then(data => data.json()).then(data => console.log(data))
  }
  render(){
    this.exampleFetch();
    return <div>
      Content will be here soon..
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
