  export type GetIan = {
    id: string;
  };
  
  export type CreateIan = {

    name: string;
    age: number;
    email: string;
  };
  
  export type UpdateIan = {
    id: string;
    name: string;
    age: number;
    email: string;
  };

  export type IanAlias = {
    alias: string;
  };
  
  export type IanCreatedAlias = {
    ianCreated: CreateIan & IanAlias;
  };

  export type IanUpdatedAlias = {
    ianUpdated: UpdateIan & IanAlias;
  };
  
  