export type AuthResponse = {
  status: string;
};

export type AutologinResponse = {
  token: string;
  code: string;
  phone: string;
};

export type AuthTokenResponse = {
  status: string;
  token: string;
};

export type AuthSignInRequest = {
  phone: string;
};

export type AuthSignUpRequest = {
  phone: string;
};

export type AutologinRequest = {
  token: string;
};

export type CodeConfirmRequest = {
  code: string;
  phone: string;
};

export type AutologinCodeConfirmRequest = {
  code: string;
  phone: string;
  token: string;
};
