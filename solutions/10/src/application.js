import escapeHtml from 'escape-html';

// BEGIN

export default function handleFormSubmit() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = escapeHtml(form.elements.email.value);
    const name = escapeHtml(form.elements.name.value);
    const comment = escapeHtml(form.elements.comment.value);
    
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${email}</div>
        <div>Name: ${name}</div>
        <div>Comment: ${comment}</div>
      </div>
    `;
    
    form.replaceWith(resultDiv);
  });
}
// END