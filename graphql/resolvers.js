import { mergeResolvers } from '@graphql-tools/merge';
import propertyResolvers from './resolvers/property';

export const resolvers = mergeResolvers([
    propertyResolvers 
]);
