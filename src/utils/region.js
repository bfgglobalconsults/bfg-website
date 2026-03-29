/**
 * Get the current region based on the URL path
 * @param {string} pathname - The current pathname
 * @returns {string} - 'uk', 'ng', or 'global'
 */
export function getRegionFromPath(pathname) {
  if (pathname.startsWith('/uk')) {
    return 'uk';
  }
  if (pathname.startsWith('/ng')) {
    return 'ng';
  }
  return 'global'; // Main site shows all regions
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
