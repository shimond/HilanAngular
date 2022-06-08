export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  homeAddress: Address;
  workAddress: Address;
}

export interface Address {
  city: string;
  country: string;
}
