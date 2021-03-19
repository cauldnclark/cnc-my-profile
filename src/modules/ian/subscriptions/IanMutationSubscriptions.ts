// Mutation Subscriptions

export const ianMutationSubscriptions: string = `
  ianCreated(
    alias: String!,
  ): Ian

  ianUpdated(
    alias: String!,
  ): Ian
`;
