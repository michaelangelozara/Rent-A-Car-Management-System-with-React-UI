import { Address } from "./Address";

export interface BasicUser {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
}

export interface DetailedUser extends BasicUser {
    username: string;
    email: string;
    address: Address;
}