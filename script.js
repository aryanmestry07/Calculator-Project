const display = document.getElementById('display');  
    
function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {    
  const result = eval(display.value);
  display.value = result;
 
  }
  const toggle = document.getElementById('modeToggle');
  const label = document.querySelector('.mode-label');
  
  // Set default state to light mode (unchecked)
  document.body.classList.add('light-mode');
  toggle.checked = false;
  label.textContent = 'Light Mode';
  
  // Listen for toggle changes to switch mode
  toggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      label.textContent = 'Dark Mode';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      label.textContent = 'Light Mode';
    }
  });
  