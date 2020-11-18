const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const getUlById = document.querySelector('#ingredients');
// console.log(getUlById);

const array = ingredients.map(item => {
  let element = document.createElement('li');
  // console.log(element);
  element.textContent = item;
  return element;
});

getUlById.append(...array);




 

