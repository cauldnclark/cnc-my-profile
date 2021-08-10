export type KenCreate = {
    name: string;
    age: number;
    email: string;
    address: string;
  };

  export type GetKen = {
    id: string;
  };

  export type UpdateKen = {
    id: string;
    name: string;
    age: number;
    email: string;
    address: string;
  };

  export type KenAlias = {
    alias: string;
  };

  export type KenCreatedAlias = {
    kenCreated: KenCreate & KenAlias;
  };
  export type KenUpdatedAlias = {
    kenUpdated: UpdateKen & KenAlias;
  };