import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  exp: number;
  iat: number;
  [key: string]: any;
}

/**
 * Decode JWT token
 * @param token JWT token string
 * @returns Decoded token payload or null if invalid
 */
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (error) {
    return null;
  }
};

/**
 * Check if JWT token is expired
 * @param token JWT token string
 * @returns true if expired, false if valid
 */
export const isExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // If we can't decode, consider it expired
  }
};

/**
 * Get user ID from JWT token
 * @param token JWT token string
 * @returns User ID or null if invalid
 */
export const getUserIdFromToken = (token: string): string | null => {
  const decoded = decodeToken(token);
  return decoded?.sub || null;
};
