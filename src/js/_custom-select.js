export function customSelect() {
  const customSelects = document.querySelectorAll('.custom-select');

  if (!customSelects.length) return;

  customSelects.forEach(select => {
    const title = select.querySelector('.custom-select__title');
    const items = select.querySelectorAll('.custom-select__list-item');

    // Устанавливаем выбранный элемент при загрузке
    const activeItem = select.querySelector('.custom-select__list-item--active');
    if (activeItem) {
      title.textContent = activeItem.textContent.trim();
    }

    // Открытие/закрытие селекта
    if (title) {
      title.addEventListener('click', () => {
        select.classList.toggle('custom-select--active');
      });
    }

    // Выбор элемента
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Снимаем активный класс со всех
        items.forEach(i => i.classList.remove('custom-select__list-item--active'));

        // Назначаем активный выбранному
        item.classList.add('custom-select__list-item--active');

        // Подставляем текст в title
        title.textContent = item.textContent.trim();

        // Закрываем селект
        select.classList.remove('custom-select--active');
      });
    });
  });

  // Клик вне селекта — закрыть
  document.addEventListener('click', (e) => {
    const isTitle = e.target.closest('.custom-select__title');
    const isList = e.target.closest('.custom-select__list');

    if (!isTitle && !isList) {
      customSelects.forEach(el => el.classList.remove('custom-select--active'));
    }
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      customSelects.forEach(el => el.classList.remove('custom-select--active'));
    }
  });
}
