import React, { Component } from 'react';
import { Query, renderToStringWithData } from 'react-apollo';
import Queries from '../../client/graphql/queries';
const { FETCH_GOD } = Queries;
import NameDetail from '../detail/NameDetail'
import { Router } from 'react-router';

const GodDetail = props => {
    return (
      <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
        {({ loading, error, data }) => {

          if (loading) return <p>Loading ...</p>
          if (error) return <p>Error</p>

          return (
            <div className='detail'>
              <NameDetail id={data.god.id} name={data.god.name} />
            </div>
          )
        }} 
      </Query>
    );
}

export default GodDetail;