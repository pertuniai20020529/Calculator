function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}