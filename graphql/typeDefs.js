
import { mergeTypeDefs } from '@graphql-tools/merge';
import propertySchema from './schemas/property';


export const typeDefs = mergeTypeDefs([
  propertySchema
]);
