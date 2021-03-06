import React, { Component } from 'react';
import './App.css';
import logo from './spacex.png'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Launches from './components/launches'
import Launch from './components/launch'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
          <img 
            src={logo}
            alt='SpaceX Logo'
            style={{width: 300, display: 'block', margin: 'auto'}}
          />
          <Route exact path='/' component={Launches} />

          <Route path='/launch/:flight_number' component={Launch} />
        </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
