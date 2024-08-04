export interface UserType {
    id: number;
    username: string;
    email: string;
    lastLogin: Date;
  }
  

export interface UserState {
    loading: boolean;
    users: UserType[];
}