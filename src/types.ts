// Shapes of the data returned by the users API.
// Only the fields you need for this exercise are included.

export interface Company {
  name: string;
  title: string;
  department: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: Company;
  address: Address;
}

// Response from GET https://dummyjson.com/users
export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
