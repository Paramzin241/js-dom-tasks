import 'whatwg-fetch';

export default () => {
  // BEGIN
  export default function initAutocomplete() {
  const autocompleteInputs = document.querySelectorAll('input[data-autocomplete]');
  
  autocompleteInputs.forEach(input => {
    const listName = input.getAttribute('data-autocomplete-name');
    const targetList = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);
    
    if (!targetList) return; 
    
    input.addEventListener('input', async (event) => {
      const searchValue = event.target.value.trim();
      
      if (searchValue === '') {
        targetList.innerHTML = '';
        return;
      }
      
      try {
        const baseUrl = input.getAttribute('data-autocomplete');
        const url = new URL(baseUrl, window.location.origin);
        url.searchParams.set('search', searchValue);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const countries = await response.json();
        
        targetList.innerHTML = '';
        
        if (countries.length === 0) {
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          targetList.appendChild(li);
        } else {
          countries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            targetList.appendChild(li);
          });
        }
        } catch (error) {
        console.error('Ошибка при выполнении автозаполнения:', error);
        targetList.innerHTML = '<li>Error loading data</li>';
        }
      });
    });
  }
  // END
};
