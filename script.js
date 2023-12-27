const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]





const list = document.querySelector('ul')
const buttonForEach = document.querySelector('.ForEach')
const mapping = document.querySelector('.map')
const summing = document.querySelector('.reduce')
const filtering = document.querySelector('.Filter')



let myLi = ''

function showAll(productArray) {
    myLi = ''
    
    productArray.forEach((product) => {
        myLi = myLi +
            `<li>
                <img src=${product.src}>    
                <p class="nameProduct">${product.name}</p>
                <p class="priceProduct">${'R$' + product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </li>`;
    });

    list.innerHTML = myLi;
}









// function showAll(productArray) {
//     myLi = ''
//     menuOptions.forEach(() => {
//         myLi = myLi +
//             `<li>
//                 <img src=${productArray.src}>    
//                 <p class="nameProduct">${productArray.name}</p>
//                 <p class="priceProduct">${'R$' + productArray.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//             </li>`

//         list.innerHTML = myLi
//     })
// }

function mapAll() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }));


    myLi = ''
    newPrice.forEach((product) => {



        myLi = myLi +
            `<li>
                <img src=${product.src}>    
                <p class="nameProduct">${product.name}</p>
                <p class="priceProduct">${'R$' + product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </li>`


    })
    list.innerHTML = myLi
}


function sumAll() {
    const allValueSum = menuOptions.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    list.innerHTML =
        `
        <li>
            <p class="allPrices">O valor total é: R$ ${allValueSum.toFixed(2)}</p>
        </li>
            `


}

function filterAll() {
    myLi = ''

    const filterVegan = menuOptions.filter((productVegan) => productVegan.vegan === true )

    showAll(filterVegan)
} 





buttonForEach.addEventListener('click', () => showAll(menuOptions))
mapping.addEventListener('click', mapAll)
summing.addEventListener('click', sumAll)
filtering.addEventListener('click', filterAll)



