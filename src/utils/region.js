/**
 * Get the current region based on the URL path
 * @param {string} pathname - The current pathname
 * @returns {string} - 'nigeria' or 'uk'
 */
export function getRegionFromPath(pathname) {
  if (pathname.startsWith('/uk')) {
    return 'uk';
  }
  return 'nigeria';
}

/**
 * Check if content should be shown in the current region
 * @param {Array<string>} contentRegions - Array of regions the content is available in
 * @param {string} currentRegion - The current region
 * @returns {boolean}
 */
export function isContentAvailableInRegion(contentRegions, currentRegion) {
  if (!contentRegions || contentRegions.length === 0) {
    return true; // Show everywhere if no region specified
  }
  return contentRegions.includes(currentRegion);
}
