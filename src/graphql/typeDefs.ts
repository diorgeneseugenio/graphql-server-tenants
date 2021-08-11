import {  gql } from 'apollo-server';

const typeDefs = gql`
  type Tenant {
    id: String
    name: Strings
  }

  type Query {
    allTenants: [Tenant]
  }
`;


export default typeDefs