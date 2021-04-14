const navContainer = document.querySelector(".nav");

const navbar = () => {
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
              <a class="nav-link nav-links__link" href="index.html">Home</a>
            </li>
            <li class="nav-item nav-links__item">
              <a class="nav-link nav-links__link" href="./products.html">Products</a>
            </li>
            <li class="nav-item nav-links__item">
              <a class="nav-link nav-links__link" href="./cart.html">Cart</a>
            </li>
          </ul>
        </div>
            
        <aside class="auth">
          <li class="nav-item nav-links__item">
            <a 
              class="nav-link nav-links__link" 
              href="login.html"
              >
              Login
            </a>
          </li>
        </aside>
        
      </div>
  </nav>
  `;
};

export default navbar;
