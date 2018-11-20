document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  fetch('https://api.flatlandchurch.com/v2/emails/christmas-budget?202f1c42-7054-46ee-8ca2-ddc85f9c789b', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
    .then(() => {
      document.getElementById('form').style.display = 'none';
      document.getElementById('confirmation').style.display = 'block';
    })
    .catch(() => {
      document.getElementById('email').className = 'error';
      document.getElementById('errors').innerText = 'There was a problem getting your guide. Try again a little later.';
    });
});