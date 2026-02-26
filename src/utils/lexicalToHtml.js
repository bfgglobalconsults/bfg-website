/**
 * Convert Payload's Lexical rich text to HTML
 * This is a simplified converter for basic content
 */
export function lexicalToHtml(lexicalData) {
  if (!lexicalData) return '';
  
  // If it's already a string, return it
  if (typeof lexicalData === 'string') return lexicalData;
  
  // If it's a Lexical JSON object
  if (lexicalData.root && lexicalData.root.children) {
    return convertNodesToHtml(lexicalData.root.children);
  }
  
  return '';
}

function convertNodesToHtml(nodes) {
  if (!Array.isArray(nodes)) return '';
  
  return nodes.map(node => {
    // Handle different node types
    switch (node.type) {
      case 'paragraph':
        return `<p>${convertNodesToHtml(node.children || [])}</p>`;
      
      case 'heading':
        const level = node.tag || 'h2';
        return `<${level}>${convertNodesToHtml(node.children || [])}</${level}>`;
      
      case 'text':
        let text = node.text || '';
        // Apply formatting
        if (node.format) {
          if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
          if (node.format & 2) text = `<em>${text}</em>`; // Italic
          if (node.format & 4) text = `<u>${text}</u>`; // Underline
        }
        return text;
      
      case 'link':
        const url = node.fields?.url || node.url || '#';
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${convertNodesToHtml(node.children || [])}</a>`;
      
      case 'list':
        const listTag = node.listType === 'number' ? 'ol' : 'ul';
        return `<${listTag}>${convertNodesToHtml(node.children || [])}</${listTag}>`;
      
      case 'listitem':
        return `<li>${convertNodesToHtml(node.children || [])}</li>`;
      
      case 'quote':
        return `<blockquote>${convertNodesToHtml(node.children || [])}</blockquote>`;
      
      case 'upload':
        // Handle uploaded images
        if (node.value && typeof node.value === 'object') {
          const imageUrl = node.value.url || '';
          const altText = node.value.alt || node.value.filename || 'Image';
          return `<img src="${imageUrl}" alt="${altText}" class="w-full h-auto rounded-lg my-4" />`;
        }
        return '';
      
      case 'linebreak':
        return '<br />';
      
      default:
        // For unknown types, try to process children
        if (node.children) {
          return convertNodesToHtml(node.children);
        }
        return '';
    }
  }).join('');
}
