
    const cart = [
        { item: "노트북", price: 1200000, quantity: 1 }, 
        { item: "마우스", price: 35000, quantity: 2 }, 
        { item: "키보드", price: 89000, quantity: 1 }
    ];

    let totalPrice = 0;
    for (let i=0; i<cart.length; i++){
        //요건 내가한거
        // for(let j=0;j<cart[i].quantity;j++)
        //     totalPrice+=cart[i].price;
        totalPrice+=cart[i].price*cart[i].quantity;
    }
    console.log(`totalPrice= ${totalPrice}`);//어.. '이게아닐 tab위에 `이거네요 에라이
    totalPrice=0;

    cart.forEach(good=>totalPrice+=good.price*good.quantity);
    console.log(totalPrice);

    totalPrice=cart.reduce((a,goods)=>(a+goods.price*goods.quantity),0);
    console.log(totalPrice);

    const itemTotals=cart.map(
        goods=> ({
            item:goods.item,
            total: goods.price*goods.quantity
        }));
    console.log('제품별 금액:',itemTotals);

    const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(e=>e.toUpperCase());
console.log(uppercasedNames);

const capitalStartnames = names.map(n=>n[0].toUpperCase()+n.slice(1));
console.log(capitalStartnames);