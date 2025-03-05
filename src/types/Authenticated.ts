import { BasicUser } from "./User";

export interface Auth {
    accessToken: string;
    currentUser: BasicUser
}