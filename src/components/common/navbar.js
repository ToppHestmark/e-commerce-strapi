const navContainer = document.querySelector(".nav");
import { getUsername } from "../../utils/storage.js";
import { performLogout } from "../../helpers/index.js";

const createNavbar = () => {
  const pathName = location.pathname;
  const username = getUsername();

  let isAuthenticated = `
    <li class="nav-item nav-links__item">
      <a 
        class='nav-link nav-links__link ${
          pathName === "/login.html" ? "nav-links__active" : ""
        }' 
        href="login.html"
        >
        Log in
      </a>
    </li>
  `;

  if (username) {
    isAuthenticated = `
      <li class="nav-item nav-links__item">
        <a 
          id="logout"
          class='nav-link nav-links__link' 
          >
          Log out
        </a>
      </li>
      
    `;
  }

  let userOptions = "";
  if (username) {
    userOptions = `
      <li class="nav-item nav-links__item">
        <a href="add.html"
          class='nav-link nav-links__link ${
            pathName === "/add.html" ? "nav-links__active" : ""
          }' 
          >
          Add product
        </a>
      </li>
    `;
  }

  navContainer.innerHTML = `
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        <button
          class="navbar__toggler-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar__toggler-icon">
            <i class="fas fa-bars"></i>
          </span>
        </button>

        <a class="navbar__logo" href="./index.html">
        LOGO
        </a>

        <div 
          class="collapse navbar-collapse" 
          id="navbarSupportedContent"
          >
          <ul 
            class="nav-links navbar-nav me-auto mb-3 mb-lg-0"
            >
            <li class="nav-item nav-links__item">
              <a class='nav-link nav-links__link ${
                pathName === "/index.html" ? "nav-links__active" : ""
              }'
                href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item nav-links__item">
              <a class='nav-link nav-links__link ${
                pathName === "/products.html" ? "nav-links__active" : ""
              }' 
              href="./products.html">Products</a>
            </li>
            <li class="nav-item nav-links__item">
              <a class='nav-link nav-links__link ${
                pathName === "/cart.html" ? "nav-links__active" : ""
              }' 
              href="./cart.html">Cart</a>
            </li>
            ${userOptions}
          </ul>
        </div>
            
        <aside class="navbar__right">
         ${isAuthenticated}
        </aside>
        
      </div>
  </nav>
  `;

  performLogout();

  const navToggler = document.querySelector(".navbar__toggler-btn");
  navToggler.onclick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("body--preventScrolling");
  };
};

export default createNavbar;
