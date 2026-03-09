export function productsInit() {
    const productsItemFavorites = document.querySelectorAll('.products__item-favorite');
    productsItemFavorites.forEach(favorite => {
        favorite.addEventListener('click', () => {
            favorite.classList.toggle('products__item-favorite--active')
        })
    });
}
