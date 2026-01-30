// Utility functions

/**
 * Get current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Format email as mailto link
 */
export function formatEmailLink(email: string): string {
  return `mailto:${email}`;
}

/**
 * Generate a unique key for list items
 */
export function generateKey(prefix: string, id: number | string): string {
  return `${prefix}-${id}`;
}


