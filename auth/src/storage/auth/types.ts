export type AuthState = {
  token: string;
  loading: boolean;
  error: string;
};

export type AuthPayload = {
  payload: Partial<AuthState>;
};
