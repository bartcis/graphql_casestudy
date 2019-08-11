import React from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const countryQuery = gql` 
  query($id: Int!) {
    country(id: $id) {
      name
      population
    }
  }
`

const FunctionQuery = ({countryId}) => {
  const params = {
    id: Number(countryId)
  }

  return (
    <Query query={countryQuery} variables={params}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>ERRRORRR</div>

        return (
          <>
            <h1>Function response:</h1>
            <div className='container'>
              <p className='container__item'>
                <span><b>Country:</b></span>
                <span><b>Population:</b></span>
              </p>
              <p className='container__item' key={data.country.id}>
                <span dangerouslySetInnerHTML={{ __html: data.country.name }}></span>
                <span dangerouslySetInnerHTML={{ __html: data.country.population }}></span>
              </p>
            </div>
          </>
        )
      }}
    </Query>
  )
};

  export default FunctionQuery;
