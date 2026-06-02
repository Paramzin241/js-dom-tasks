// BEGIN
export default function prettify(document) {
  const divs = document.querySelectorAll('div');
  
  divs.forEach(div => {
    const childNodes = Array.from(div.childNodes);
    
    childNodes.forEach(node => {
      if (node instanceof Text) {
        const textContent = node.textContent;
        
        if (textContent.trim() !== '') {
          // Создаем новый элемент <p>
          const p = document.createElement('p');
          p.textContent = textContent;
          node.replaceWith(p);
        }
      }
    });
  });
}
// END