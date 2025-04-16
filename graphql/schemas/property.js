import { gql } from 'graphql-tag';

export default gql`
  type Properties {
    id: ID!
    name: String!
    total_rooms: Int
    total_bathroom: Int
    dimension: String
    price: Float
    property_type: String
    location: String
    property_banner_image: String
    images: [String]
    owner_name: String
    owner_contact: String
    property_video: String
    property_description: String
    location_latitude: Float
    location_longitude: Float
    isBooked: Boolean
    created_at: String
  }

  type Query {
    getProperties: [Properties]
  }

  type Mutation {
    addProperty(
      name: String!
      total_rooms: Int
      total_bathroom: Int
      dimension: String
      price: Float
      property_type: String
      location: String
      property_banner_image: String
      images: [String]
      owner_name: String
      owner_contact: String
      property_video: String
      property_description: String
      location_latitude: Float
      location_longitude: Float
      isBooked: Boolean
    ): Properties

    deleteProperty(id: ID!): Properties
  }
`;
