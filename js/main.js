const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img class="img-item"src="img/item${item.id}.jpg" alt="item${item.id}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn btn-cart">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    //document.querySelector('.products').innerHTML = productsList;
    /*Зяпятые вставляються, потому, что в innerHTML = productsList вставляет весь массив в том числе и разделительные запятые. 
    Вставлю каждый элемен из массива productsList отельно
    */
    productsList.forEach(item => {
        document.querySelector('.products').insertAdjacentHTML('beforeend', item);
    });
};

renderPage(products);