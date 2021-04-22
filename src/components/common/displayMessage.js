const displayMessage = (messageType, message, targetElement) => {
  const element = document.querySelector(targetElement);

  element.innerHTML = `
    <div class="${messageType}" role="alert">
      ${message}
    </div>
  `;
};

export default displayMessage;
