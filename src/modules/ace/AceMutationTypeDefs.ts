export const aceMutationTypeDefs: string = `
  createAce(
    name: String!,
    age: Int,
    email: String
  ): Ace
  
  updateAce(
    id: String!,
    name: String,
    age: Int,
    email: String
  ): Ace
`;
