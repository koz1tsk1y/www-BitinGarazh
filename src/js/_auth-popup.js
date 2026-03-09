export function authPopupInit() {
  const authPopup = document.querySelector('.auth-popup');
  if (!authPopup) return;

  const callersAuthPopupBtns = document.querySelectorAll('[data-auth-login],[data-auth-registration]');
  callersAuthPopupBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {      
      if (e.target.closest('[data-auth-login]')) {
        authPopup.classList.remove('auth-popup--registration');
        authPopup.classList.add('auth-popup--login');
      }
      if (e.target.closest('[data-auth-registration]')) {
        authPopup.classList.remove('auth-popup--login');
        authPopup.classList.add('auth-popup--registration');
      }
    })    
  });
  document.addEventListener('click', (e) => {
    if ((e.target.closest('.auth-popup') && !e.target.closest('.auth-popup__body')) || e.target.closest('.auth-popup__close')) {
      authPopup.classList.remove('auth-popup--registration');
      authPopup.classList.remove('auth-popup--login');
    }
  })
}
