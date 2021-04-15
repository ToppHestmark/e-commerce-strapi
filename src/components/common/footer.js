const footerContainer = document.querySelector(".footer");

const createFooter = () => {
  footerContainer.innerHTML = `
  <div class="footer__left">
    <h6>Footer</h6>
    <h6>Footer</h6>
    <h6>Footer</h6>

  </div>
  <div class="footer__right">
    <h6>Footer</h6>
    <h6>Footer</h6>
    <h6>Footer</h6>
  </div>
  `;
};

export default createFooter;
