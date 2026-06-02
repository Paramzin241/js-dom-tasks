// BEGIN
export default function extractData(rootElement) {
  const paragraphs = rootElement.querySelectorAll('p');

  return Array.from(paragraphs)
    .map(paragraph => paragraph.textContent.trim())
    .filter(text => text.length > 0);
}
// END