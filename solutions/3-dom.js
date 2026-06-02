// BEGIN
const bodyContent = document.body.innerHTML;

const lines = bodyContent.split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);

const wrappedContent = lines.map(line => `<p>${line}</p>`).join('\n');

document.body.innerHTML = wrappedContent;
// END