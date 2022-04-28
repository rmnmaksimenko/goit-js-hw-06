const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

for (const ingredient of ingredients) {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  elements.push(listElement);
};

const list = document.querySelector('#ingredients');
list.append(...elements);