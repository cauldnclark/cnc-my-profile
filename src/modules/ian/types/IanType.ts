const { GraphQLDateTime } = require('graphql-iso-date')

export const ianType: string = `
  type Ian {
    _id: String
    name: String
    age: Int
    email: String
    createdAt: String
    updatedAt: String
  }
`;
