import { Address } from "./Address";

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

interface DetailedUser extends User {
    email: string;
    username: string;
    phoneNumber: string;
    address: Address
}