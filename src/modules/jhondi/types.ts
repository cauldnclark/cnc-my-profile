export type createJhondi = {
  name: string;
  age: number;
  email: string;
};

export type updateJhondi = {
  id: string;
  where: createJhondi;
};

export type getJhondi = {
  id: string;
};
