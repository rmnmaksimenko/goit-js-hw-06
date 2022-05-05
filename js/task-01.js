const list = document.querySelector('#categories');
const firstItem = list.children[0];
const ul = firstItem.querySelector('ul');

for (const item of list.children) {
    const category = item.querySelector('h2').textContent;
    console.log(`Category: `, category);

    const categoryElements = item.querySelector('ul');
    console.log(`Elements:`, categoryElements.children.length);
}
    
    
