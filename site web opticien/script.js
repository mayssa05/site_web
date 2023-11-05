const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  let errors = [];

  if (nameInput.value === '' || nameInput.value == null) {
    errors.push('Le nom est requis');
  }

  if (emailInput.value === '' || emailInput.value == null) {
    errors.push('L\'adresse email est requise');
  } else if (!isValidEmail(emailInput.value)) {
    errors.push('L\'adresse email n\'est pas valide');
  }

  if (messageInput.value === '' || messageInput.value == null) {
    errors.push('Le message est requis');
  }

  if (errors.length > 0) {
    event.preventDefault();
    errorElement.innerText = errors.join('\n');
  }
  
  const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const modele = document.querySelector('#modele');
const genre = document.querySelectorAll('input[name="genre"]');
const errors = document.querySelector('.errors');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errors.innerHTML = '';

  if (nom.value.trim() === '') {
    errors.innerHTML += '<p><span>Nom:</span> Veuillez saisir votre nom</p>';
  }

  if (prenom.value.trim() === '') {
    errors.innerHTML += '<p><span>Prénom:</span> Veuillez saisir votre prénom</p>';
  }

  if (email.value.trim() === '') {
    errors.innerHTML += '<p><span>Email:</span> Veuillez saisir votre email</p>';
  } else if (!validateEmail(email.value.trim())) {
    errors.innerHTML += '<p><span>Email:</span> Veuillez saisir une adresse email valide</p>';
  }

  if (tel.value.trim() === '') {
    errors.innerHTML += '<p><span>Téléphone:</span> Veuillez saisir votre numéro de téléphone</p>';
  } else if (!validateTel(tel.value.trim())) {
    errors.innerHTML += '<p><span>Téléphone:</span> Veuillez saisir un numéro de téléphone valide</p>';
  }

  if (modele.value === '') {
    errors.innerHTML += '<p><span>Modèle:</span> Veuillez choisir un modèle</p>';
  }

  let genreSelected = false;
  genre.forEach((input) => {
    if (input.checked) {
      genreSelected = true;
    }
  });
  if (!genreSelected) {
    errors.innerHTML += '<p><span>Genre:</span> Veuillez choisir votre genre</p>';
  }

  if (errors.innerHTML === '') {
    form.submit();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateTel(tel) {
  const re = /^[0-9]{10}$/;
  return re.test(tel);
}










