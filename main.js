console.log('Software');

const products = [
    {
    title: 'product1',
    description: 'blah blah blah',
    imageURL: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/741650',
    size: 'HUGE',
    weight: 'surprisingly light',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '08/25/2019',
    },
{
    title: 'product2',
    description: 'blah blah blah',
    imageURL: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/741650',
    size: 'HUGE',
    weight: 'surprisingly light',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '08/25/2019',
    },
{
    title: 'product3',
    description: 'blah blah blah',
    imageURL: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/741650',
    size: 'HUGE',
    weight: 'surprisingly light',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '08/25/2019',
    },
{
    title: 'product4',
    description: 'blah blah blah',
    imageURL: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/741650',
    size: 'HUGE',
    weight: 'surprisingly light',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '08/25/2019',
    },
{
    title: 'product5',
    description: 'blah blah blah',
    imageURL: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/741650',
    size: 'HUGE',
    weight: 'surprisingly light',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '08/25/2019',
    },
];


const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = () => {
    let domString ='';
    products.forEach ((product)=> {
        domString += `<h3>${product.title}</h3>`
    });
    printToDom('productDiv',domString)
};

const init = () => {
    domStringBuilder();
}

init();