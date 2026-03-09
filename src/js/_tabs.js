export function tabsInit() {
  const tabs = document.querySelectorAll('.tabs');

  if (!tabs.length) return;

  tabs.forEach(tabsBlock => {
    const btns = tabsBlock.querySelectorAll('.tabs__btn');
    const items = tabsBlock.querySelectorAll('.tabs__item');

    if (!btns.length || !items.length) return;

    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        // снимаем активные классы со всех кнопок и табов
        btns.forEach(b => b.classList.remove('tabs__btn--active'));
        items.forEach(item => item.classList.remove('tabs__item--active'));

        // добавляем активный класс на выбранные
        btn.classList.add('tabs__btn--active');
        if (items[index]) {
          items[index].classList.add('tabs__item--active');
        }
      });
    });
  });
}
