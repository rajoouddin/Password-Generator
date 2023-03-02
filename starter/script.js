const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '$@%&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
  const passwordLength = getPasswordLength();
  const selectedCharTypes = getSelectedCharTypes();

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomCharType = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    password += getRandomChar(randomCharType);
  }

  return password;
}

function getPasswordLength() {
  let passwordLength = prompt('Enter password length (10-64 characters):');
  while (!passwordLength || passwordLength < 10 || passwordLength > 64) {
    passwordLength = prompt('Please enter a valid password length (10-64 characters):');
  }
  return passwordLength;
}

function getSelectedCharTypes() {
  let selectedCharTypes = [];
  let lowercase = confirm('Include lowercase characters?');
  let uppercase = confirm('Include uppercase characters?');
  let numeric = confirm('Include numeric characters?');
  let special = confirm('Include special characters?');

  while (!lowercase && !uppercase && !numeric && !special) {
    alert('At least one character type must be selected.');
    lowercase = confirm('Include lowercase characters?');
    uppercase = confirm('Include uppercase characters?');
    numeric = confirm('Include numeric characters?');
    special = confirm('Include special characters?');
  }

  if (lowercase) {
    selectedCharTypes.push('lowercase');
  }
  if (uppercase) {
    selectedCharTypes.push('uppercase');
  }
  if (numeric) {
    selectedCharTypes.push('numeric');
  }
  if (special) {
    selectedCharTypes.push('special');
  }

  return selectedCharTypes;
}

function getRandomChar(charType) {
  let chars = '';
  switch (charType) {
    case 'lowercase':
      chars = lowercaseChars;
      break;
    case 'uppercase':
      chars = uppercaseChars;
      break;
    case 'numeric':
      chars = numericChars;
      break;
    case 'special':
      chars = specialChars;
      break;
  }
  return chars[Math.floor(Math.random() * chars.length)];
}

const generateBtn = document.getElementById('generate');
const passwordTextArea = document.getElementById('password');

generateBtn.addEventListener('click', () => {
  const password = generatePassword();
  passwordTextArea.value = password;
});
