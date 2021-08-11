import {  gql } from 'apollo-server';

const typeDefs = gql`
  type Tenant {
    id: String
    name: String
  }

  type Query {
    allTenants: [Tenant]
  }
`;


export default typeDefs