import camelCase from 'lodash/camelCase';

// BEGIN
function kebabToCamelCase(str) {
  const parts = str.split('-');
  const camelCase = parts.map((part, index) => {
    if (index === 0) {
      return part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('');
  
  return camelCase;
}

export default function normalize(document) {
  const allElements = document.body.getElementsByTagName('*');
  
  for (const element of allElements) {
    const classList = element.classList;
    
    const originalClasses = Array.from(classList);
    
    originalClasses.forEach(className => {
      if (className.includes('-')) {
        // Преобразуем kebab-case в camelCase
        const newClassName = kebabToCamelCase(className);
        
        classList.replace(className, newClassName);
      }
    });
  }
}
// END