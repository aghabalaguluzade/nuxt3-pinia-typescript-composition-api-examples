export interface AuthType {
    userId: number;
    token: string;
    email : string,
    refreshToken: string;
    expiresIn: Date;
    autoLogout : boolean
}

export interface AuthState {
    auth : AuthType,
    showLoading: boolean,
}