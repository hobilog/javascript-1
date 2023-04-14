const money = 4;
const price = 50;
if (money >= price) {
    console.log('Может купить наш продукт.');
} else if (money >= 5) {
    console.log('Куплен мини продукт.')
} else {
    console.log(`Не хватает денег. Нужно еще ${price - money} $.`)
}
