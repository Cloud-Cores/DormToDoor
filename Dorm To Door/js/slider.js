const brands = document.querySelector('.brands');
total_brand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', total_brand);

for (let i = 0; i < total_brand; i++) {
    brands.appendChild(brands.children[i].cloneNode(true));
}