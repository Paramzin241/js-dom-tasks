export default () => {
  // BEGIN
  function activateTab(tabButton) {
    const navContainer = tabButton.closest('[role="tablist"]');
    if (!navContainer) return;
    
    const allTabs = navContainer.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
    allTabs.forEach(tab => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    });
    
    tabButton.classList.add('active');
    tabButton.setAttribute('aria-selected', 'true');
    
    const targetId = tabButton.getAttribute('data-bs-target');
    if (targetId) {
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        const tabContentContainer = targetPane.closest('.tab-content');
        if (tabContentContainer) {
          const allPanes = tabContentContainer.querySelectorAll('.tab-pane');
          allPanes.forEach(pane => {
            pane.classList.remove('active', 'show');
          });
        }
        
        targetPane.classList.add('active', 'show');
      }
    }
  }

  const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

  tabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      activateTab(button);
    });
  });
  // END
};
