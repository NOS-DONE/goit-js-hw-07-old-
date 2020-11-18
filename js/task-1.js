// знаходимо посилпння на категорії
const categoriesRef = document.querySelectorAll('#categories > .item');
// console.log(categoriesRef.length);
console.log(`В списке ${categoriesRef.length} категории.`)
// знаходимо посилання на всі h2
const categoriesTitleRef = document.querySelectorAll('.item');
// console.log(categoriesTitleRef);
categoriesTitleRef.forEach(item => console.log(`Категория: ${item.firstElementChild.textContent}
Количество елементов: ${item.querySelectorAll('li').length}`));





