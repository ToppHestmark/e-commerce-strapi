const footerContainer = document.querySelector(".footer");

const createFooter = () => {
  footerContainer.innerHTML = `
    <div class="footer__left">
      <div class="footer__left-customer">
        <a href="#">Contact</a>
        <a href="#">Shop & Pay</a>
        <a href="#">Delivery Information</a>
        <a href="#">Returns & Exchanges</a>
        <a href="#">Sustainability</a>
      </div>
      <div class="footer__left-company">
        <a href="#">About Nordic Swag</a>
        <a href="#">Our Products</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
    <div class="footer__right">
      <div class="footer__right-socials">
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-tiktok"></i>
      </div>
      <div class="footer__right-payment">
        <i class="fab fa-bitcoin"></i>
        <i class="fab fa-paypal"></i>
        <i class="fab fa-apple-pay"></i>
        <i class="fab fa-alipay"></i>
      </div>
    </div>
  `;
};

export default createFooter;
