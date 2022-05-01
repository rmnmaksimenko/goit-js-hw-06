const list = document.querySelector('#categories');
console.log(list);
const firstItem = list.children[0];
console.log(`firstItem`, firstItem);
console.log(firstItem.querySelector('h2').textContent);
const ul = firstItem.querySelector('ul')
console.log(ul.children.length);

for (const item of list.children) {
    const category = item.querySelector('h2').textContent;
    console.log(`Category: `, category);

    const categoryElements = item.querySelector('ul');
    console.log(`Elements:`, categoryElements.children.length);
}
    
    
