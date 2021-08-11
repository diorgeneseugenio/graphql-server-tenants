import * as tenantResolver from '@/graphql/resolvers/tenant'


const resolvers = {
    Query: {
        allTenants: () => tenantResolver.allTenants,
    },
};

export default resolvers