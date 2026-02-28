/**
 * Decode a JWT token payload without external libraries.
 * Does NOT verify the signature — just extracts the payload.
 * @param {string} token - JWT string
 * @returns {object|null} Decoded payload, or null if invalid
 */
export function decodeJWT(token) {
  try {
    if (!token || typeof token !== "string") return null;

    const parts = token.split(".");
    if (parts.length !== 3) return null;

    // Base64url → Base64 → decode
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

/**
 * Check if a JWT token is expired.
 * @param {string} token - JWT string
 * @returns {boolean} true if expired or invalid
 */
export function isTokenExpired(token) {
  const payload = decodeJWT(token);
  if (!payload || !payload.exp) {
    // If no exp claim, treat as non-expiring (some APIs don't set exp)
    return false;
  }
  // exp is in seconds, Date.now() is in milliseconds
  return Date.now() >= payload.exp * 1000;
}

/**
 * Get the remaining time (in ms) until the token expires.
 * @param {string} token - JWT string
 * @returns {number|null} Milliseconds until expiry, or null if no exp claim
 */
export function getTokenRemainingTime(token) {
  const payload = decodeJWT(token);
  if (!payload || !payload.exp) return null;
  return payload.exp * 1000 - Date.now();
}
