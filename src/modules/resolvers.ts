type HiInput = {
  times: number;
};

export const resolvers = {
  Query: {
    hello: () => "world",
    hi: (_: any, b: HiInput): number => {
      return 10 * b.times;
    },
  },
};
