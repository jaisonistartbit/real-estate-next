
import { mergeTypeDefs } from '@graphql-tools/merge';
import propertySchema from './schemas/property';
import citySchema from './schemas/cities';

export const typeDefs = mergeTypeDefs([
  propertySchema,
  citySchema
]);
