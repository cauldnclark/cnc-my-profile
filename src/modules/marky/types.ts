// needed to create type call "MarkyInput" because of graphql input parameter is object
// example -- input: { x:'asdad, y:"asdasd" }
// if i try to directly deconstruct the args object like this { input }
// this error popups -- Property 'input' does not exist on type 'MarkyCreate'
// so i created a type that has an object field called input 
export type MarkyInput = {
  input: MarkyCreate
}

export type MarkyCreate = {
    name: string;
    age: number;
    email: string;
    facebook?: string;
};
export type StatusMarky = {
  status: string
}

export type UpdateMarky = {
  input: MarkyInput;
  id: string;
}

export type GetMarky = {
  id: string;
};

export type MarkyNotification = {
  id?:      string;
  message:  string;
  status:   boolean;
};
  