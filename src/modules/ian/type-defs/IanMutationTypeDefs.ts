// Mutation Type Defs

export const ianMutationTypeDefs: string = `
  createIan(
    name: String!,
    age: Int,
    email: String
  ): Ian
  
  updateIan(
    id: String!,
    name: String,
    age: Int,
    email: String
  ): Ian
`;
