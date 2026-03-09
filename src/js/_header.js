export function headerInit() {
  const catalog = document.querySelector('.header__catalog');
  if (!catalog) return;

  const btn = catalog.querySelector('.header__catalog-btn');
  const body = catalog.querySelector('.header__catalog-body');

  // Открытие/закрытие по кнопке
  btn.addEventListener('click', () => {
    catalog.classList.toggle('header__catalog--active');
  });

  // Закрытие при клике вне каталога
  document.addEventListener('click', (e) => {
    const clickInsideBtn = e.target.closest('.header__catalog-btn');
    const clickInsideBody = e.target.closest('.header');

    if ((!clickInsideBtn && !clickInsideBody) || e.target.closest('.header__burger-btn')) {
      catalog.classList.remove('header__catalog--active');
    }
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      catalog.classList.remove('header__catalog--active');
    }
  });

  const headerCatalogSpoiler = document.querySelector('.header__catalog-spoiler');
  const header = document.querySelector('.header');
  headerCatalogSpoiler?.addEventListener('click', () => {
    if (!headerCatalogSpoiler.classList.toggle('header__catalog-spoiler--active')) {
      header?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  if (header) {
    const burgerBtn = header.querySelector('.header__burger-btn');

    // Открытие/закрытие по кнопке
    burgerBtn?.addEventListener('click', () => {
      header.classList.toggle('header--burger-active');
    });

    // Закрытие при клике вне header
    document.addEventListener('click', (e) => {
      const clickInsideHeader = e.target.closest('.header');

      if (!clickInsideHeader || e.target.closest('.header__catalog-btn')) {
        header.classList.remove('header--burger-active');
      }
    });
  }

}
