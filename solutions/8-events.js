export default () => {
// BEGIN
const button = document.getElementById('alert-generator');

const alertsContainer = document.querySelector('.alerts');

let alertCounter = 1;

function handleClick() {
  const newAlert = document.createElement('div');
  
  newAlert.classList.add('alert', 'alert-primary');
  
  newAlert.textContent = `Alert ${alertCounter}`;
  
  alertsContainer.insertBefore(newAlert, alertsContainer.firstChild);
  
  alertCounter++;
}

button.addEventListener('click', handleClick);
// END
};