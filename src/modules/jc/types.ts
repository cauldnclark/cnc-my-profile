export type JcCreate = {
  name: string;
  age: number;
  email: string;
};

export type JcAlias = {
  alias: string;
};

export type JcCreatedAlias = {
  jcCreated: JcCreate & JcAlias;
};

export type GetJc = {
  id: string;
};
