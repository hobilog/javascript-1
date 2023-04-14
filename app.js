const depositSum = 12000;
const procents = 0.07;
const price = 13500;
const finalSum = depositSum * (1 + procents / 12)**24
if (finalSum >= price) {
    console.log(`Вы можете купить дом. Остаток после покупки: ${finalSum - price} $.`)
} else {
    console.log(`Вы не можете купить дом. Для покупки не хватает: ${price - finalSum} $.`)
}