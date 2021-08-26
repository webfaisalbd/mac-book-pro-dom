// declare variable for every id
const firstMemory = document.getElementById('8gb-memory');
const secondMemory = document.getElementById('16gb-memory');
const firstStorage = document.getElementById('256gb-ssd');
const secondStorage = document.getElementById('512gb-ssd');
const thirdStorage = document.getElementById('1tb-ssd');
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const totalPrice = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const promoCode = document.getElementById('promo-code');
const apply = document.getElementById('apply');
const finallyTotal = document.getElementById('finally-total');
let finalValue;


// priceSet and PriceGet using respective product id 
function priceSetPriceGet(cost, getPriceId, setPriceId) {
    getPriceId.value = cost;
    const setPriceNumber = Number(getPriceId.value);
    setPriceId.innerText = setPriceNumber;
    updateTotal();
}
// price 
// 1st memory 
firstMemory.addEventListener('click', function () {
    priceSetPriceGet(0, firstMemory, extraMemoryCost);
})
// 2nd memory 
secondMemory.addEventListener('click', function () {
    priceSetPriceGet(180, secondMemory, extraMemoryCost);
})

// Storage
// 1st storage
firstStorage.addEventListener('click', function () {
    priceSetPriceGet(0, firstStorage, extraStorageCost);
})

// 2nd storage
secondStorage.addEventListener('click', function () {
    priceSetPriceGet(100, secondStorage, extraStorageCost);
})

// 3rd storage
thirdStorage.addEventListener('click', function () {
    priceSetPriceGet(180, thirdStorage, extraStorageCost);
})

//shipping cost
// free shipping
freeDelivery.addEventListener('click', function () {
    priceSetPriceGet(0, freeDelivery, deliveryCharge);
})

// paid shipping
paidDelivery.addEventListener('click', function () {
    priceSetPriceGet(20, paidDelivery, deliveryCharge);
})

// update total
function updateTotal() {
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const extraMemoryCostNumber = parseInt(extraMemoryCost.innerText);
    const extraStorageCostNumber = parseInt(extraStorageCost.innerText)
    const deliveryChargeNumber = parseInt(deliveryCharge.innerText);
    totalPrice.innerText = bestPriceAmount + extraMemoryCostNumber + extraStorageCostNumber + deliveryChargeNumber;
    finalValue = parseFloat(totalPrice.innerText);
    finallyTotal.innerText = finalValue;
}

//apply prome code
apply.addEventListener('click', function () {
    updateTotal();
    const promoCodeText = promoCode.value;
    //make it lowerCase for any case input string
    if (promoCodeText.toLowerCase() == "stevejobs") {
        finalValue = finalValue * 0.8;
        finallyTotal.innerText = finalValue;
    }
    promoCode.value = "";
})
