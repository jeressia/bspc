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
    domString += '<div class="row">';
    products.forEach ((product)=> {
        domString += `<div class="col-sm-4">`;
        domString += '<div class="card">';
        domString += `<div class="card-header">${product.title}</div>`
        domString += `<img src="${product.imageURL}" class="card-img-top" alt="...">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${product.title}</h5>`;
        domString += `<h6>${product.description}</h6>`;
        domString += `<h6>Size: ${product.size}</h6>`;
        domString += '</div>';
        domString += '</div>';
        domString += `</div>`;
    })
    domString += '</div>';
    printToDom('container',domString);
}

const init = () => {
    domStringBuilder();
}

init();