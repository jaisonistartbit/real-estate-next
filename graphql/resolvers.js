import { mergeResolvers } from '@graphql-tools/merge';
import propertyResolvers from './resolvers/property';
import cityResolvers from './resolvers/cities';

export const resolvers = mergeResolvers([
    propertyResolvers ,
    cityResolvers
]);
