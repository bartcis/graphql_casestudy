import React, { Component } from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const countiresQuery = gql` {
  countries {
    name
    population
    inNato
  }
}`

export default class ClassQuery extends Component {
  render() {
    return (
      <Query query={countiresQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Ładuje dane...</div>
          if (error) return <div>Wystąpił błąd</div>
    
          const countries = data.countries;
    
          return (
            <>
              <h1>Class response:</h1>
              <div className='container'>
                <p className='container__item'>
                  <span><b>Country:</b></span>
                  <span><b>Population:</b></span>
                  <span><b>In NATO?</b></span>
                </p>
                {countries.map(country => 
                  <p className='container__item' key={country.id}>
                    <span dangerouslySetInnerHTML={{ __html: country.name }}></span>
                    <span dangerouslySetInnerHTML={{ __html: country.population }}></span>
                    <span dangerouslySetInnerHTML={{ __html: country.inNato }}></span>
                  </p>
                )}
              </div>
            </>
          )
        }}
      </Query>
    );
  }
}
