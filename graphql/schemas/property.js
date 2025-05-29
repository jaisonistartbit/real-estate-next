import { gql } from 'graphql-tag';

export default gql`
  type ImageObject {
    url: String!
    image: String!
  }

  type Properties {
    id: ID!
    name: String!
    total_rooms: Int
    total_bathroom: Int
    dimension: String
    price: Float
    property_type: String
    location: String
    city: String        
    state: String        
    property_banner_image: String
    banner_image_name: String
    images: [ImageObject!]!
    owner_name: String
    owner_contact: String
    property_video: String
    property_video_name: String
    property_description: String
    location_latitude: Float
    location_longitude: Float
    isbooked: Boolean
    created_at: String
    user_id: ID!
  }

  input ImageObjectInput {
    url: String!
    image: String!
  }

  type Query {
    getProperties(limit: Int): [Properties]
    getPropertyById(id: ID!): Properties
    getPropertiesByUserId(user_id: ID!): [Properties]
    getPropertiesByCityName(city: String!): [Properties!]!
    searchProperties(query: String!): [Properties]
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
      city: String        
      state: String       
      property_banner_image: String
      banner_image_name: String
      images: [ImageObjectInput!]!
      owner_name: String
      owner_contact: String
      property_video: String
      property_video_name: String
      property_description: String
      location_latitude: Float
      location_longitude: Float
      isbooked: Boolean
      user_id: ID!
    ): Properties

    deleteProperty(id: ID!): Properties

  editProperty(
    id: ID!
    name: String!
    total_rooms: Int
    total_bathroom: Int
    dimension: String
    price: Float
    property_type: String
    location: String
    city: String        
    state: String       
    property_banner_image: String
    banner_image_name: String
    images: [ImageObjectInput!]!
    owner_name: String
    owner_contact: String
    property_video: String
    property_video_name: String
    property_description: String
    location_latitude: Float
    location_longitude: Float
    isbooked: Boolean
    user_id: ID!
  ): Properties
  }
`;
