export interface JWTPayload {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}
