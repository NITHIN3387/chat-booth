export interface AuthUserType {
  id: string;
  name: string;
  email: string;
}

export interface AuthUserContextType {
  authUser: AuthUserType | null
}