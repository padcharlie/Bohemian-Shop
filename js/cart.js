const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')


function LogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'));
  console.log(logedUser);

  if (Array.isArray(logedUser)) {
    logInButton.innerHTML = `
      <a class="nav-link" href="../html/userProfile.html" target="_blank">${logedUser[0][0].username}</a>
      `
  } else {
    logInButton.innerHTML = `
    <a class="nav-link" href="../html/login.html" target="_blank"> Log In </a>
    `
  }
}

detectLogedUser()

function detectCartNumber() {
  let  cartQuant = JSON.parse(localStorage.getItem('cartNumbers'));
  console.log(logedUser);

  if (cartQuant){
    document.querySelector('.cart span').textContent = cartQuant
  }
}

detectCartNumber()

