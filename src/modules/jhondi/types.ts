export type responseJhondi = {
  _id: string;
  name: string;
  age: number;
  email: string;
  createdAt: String;
  updatedAt: String;
};

export type alias = {
  alias: String;
};

export type aliasJhondi = {
  _id: String | number;
  name: string;
  age: number;
  email: string;
};

export type jhondiCreatedAlias = {
  jhondiCreated: alias & aliasJhondi;
};

export type jhondiUpdatedAlias = {
  jhondiUpdated: alias & aliasJhondi;
};

export type createJhondi = {
  name: string;
  age: number;
  email: string;
};

export type updateJhondi = {
  id: string;
  where: responseJhondi;
};

export type getJhondi = {
  id: string;
};
