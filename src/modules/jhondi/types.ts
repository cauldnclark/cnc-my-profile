export type createJhondi = {
  name: string;
  age: number;
  email: string;
};

export type inputJhondi = {
  name: string;
  age: number;
  email: string;
};

export type updateJhondi = {
  id: string;
  where: inputJhondi;
};

export type getJhondi = {
  id: string;
};
