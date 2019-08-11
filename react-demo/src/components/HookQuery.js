import React from 'react';
import { useQuery } from 'graphql-hooks';

const countryQuery = ` 
  query($id: Int!) {
    country(id: $id) {
      name
      population
    }
  }
`

const HookQuery = ({countryId}) => {
  const params = {
    id: Number(countryId)
  }

  const { loading, error, data } = useQuery(countryQuery, {
    variables: params,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <h1>Hook response:</h1>
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
  );
};

export default HookQuery;
