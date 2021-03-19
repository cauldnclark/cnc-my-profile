export type responseJhondi = {
  _id: string;
  name: string;
  age: number;
  email: string;
  createdAt: String;
  updatedAt: String;
};

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

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
