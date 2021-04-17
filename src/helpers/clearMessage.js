const clearMessage = (targetEl) =>
  (window.onclick = () => {
    targetEl.innerHTML = "";
  });

export default clearMessage;
