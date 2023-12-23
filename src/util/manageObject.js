export let manageObject = {}




manageObject.sumObjectList = function (objects){
    const priceSumByName = {};

    objects.forEach(obj => {
        if (priceSumByName[obj.name]) {
            priceSumByName[obj.name].totalPrice += obj.price;
            priceSumByName[obj.name].totalDiscountPrice += obj.discountPrice;
            priceSumByName[obj.name].count += 1;
        } else {
            priceSumByName[obj.name] = { totalPrice: obj.price,totalDiscountPrice : obj.discountPrice, count: 1 };
        }
    });

    return Object.keys(priceSumByName).map(name => ({
        name: name,
        total_price: priceSumByName[name].totalPrice,
        total_discount_price: priceSumByName[name].totalDiscountPrice,
        count: priceSumByName[name].count
    }))
}